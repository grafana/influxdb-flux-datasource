import TemplateSrv from './mocks/template_srv_stub';
import { dateTime } from '@grafana/data';
import Datasource from './datasource';

describe('InfluxDB (Flux)', () => {
  const templateSrv = new TemplateSrv();
  const ds = new Datasource({ url: '' }, {}, templateSrv);
  const DEFAULT_OPTIONS = {
    rangeRaw: { to: 'now', from: 'now - 3h' },
    scopedVars: {},
    targets: [],
  };

  // Skip those for now because they rely on real template expansion
  describe('prepareQueryTarget()', () => {
    let target: any;

    it.skip('replaces $range variable', () => {
      target = ds.prepareQueryTarget({ query: 'from(bucket: "test") |> range($range)' }, DEFAULT_OPTIONS);
      expect(target.query).toBe('from(bucket: "test") |> range(start: -3h)');
    });

    it.skip('replaces $range variable with custom dates', () => {
      const to = dateTime();
      const from = dateTime().subtract(1, 'hours');
      target = ds.prepareQueryTarget(
        { query: 'from(bucket: "test") |> range($range)' },
        {
          ...DEFAULT_OPTIONS,
          rangeRaw: { to, from },
        }
      );
      const start = from.toISOString();
      const stop = to.toISOString();
      expect(target.query).toBe(`from(bucket: "test") |> range(start: ${start}, stop: ${stop})`);
    });
  });
});
