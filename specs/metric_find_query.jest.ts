import expandMacros from '../src/metric_find_query';

describe('metric find query', () => {
  describe('expandMacros()', () => {
    it('returns a non-macro query unadulterated', () => {
      const query = 'from(bucket:"telegraf") |> last()';
      const result = expandMacros(query);
      expect(result).toBe(query);
    });

    it('returns a measurement query for measurements()', () => {
      const query = ' measurements(mydb) ';
      const result = expandMacros(query).replace(/\s/g, '');
      expect(result).toBe(
        'from(bucket:"mydb")|>range($range)|>group(columns:["_measurement"])|>distinct(column:"_measurement")'
      );
    });

    it('returns a tags query for tags()', () => {
      const query = ' tags(mydb , mymetric) ';
      const result = expandMacros(query).replace(/\s/g, '');
      expect(result).toBe(
        'from(bucket:"mydb")|>range($range)|>filter(fn:(r)=>r._measurement=="mymetric")|>keys()'
      );
    });

    it('returns a tag values query for tag_values()', () => {
      const query = ' tag_values(mydb , mymetric, mytag) ';
      const result = expandMacros(query).replace(/\s/g, '');
      expect(result).toBe(
        'from(bucket:"mydb")|>range($range)|>filter(fn:(r)=>r._measurement=="mymetric")' +
          '|>group(columns:["mytag"])|>distinct(column:"mytag")'
      );
    });

    it('returns a field keys query for field_keys()', () => {
      const query = ' field_keys(mydb , mymetric) ';
      const result = expandMacros(query).replace(/\s/g, '');
      expect(result).toBe(
        'from(bucket:"mydb")|>range($range)|>filter(fn:(r)=>r._measurement=="mymetric")' +
          '|>group(columns:["_field"])|>distinct(column:"_field")'
      );
    });
  });
});
