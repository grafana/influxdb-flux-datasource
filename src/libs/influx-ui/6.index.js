(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 1551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@influxdata/clockface/dist/index.js
var dist = __webpack_require__(3);

// EXTERNAL MODULE: ./src/shared/decorators/errors.tsx
var errors = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/uuid/index.js
var uuid = __webpack_require__(109);
var uuid_default = /*#__PURE__*/__webpack_require__.n(uuid);

// EXTERNAL MODULE: ./src/dataLoaders/constants/pluginConfigs.ts + 18 modules
var pluginConfigs = __webpack_require__(233);

// EXTERNAL MODULE: ./src/dataLoaders/components/BucketsDropdown.tsx
var BucketsDropdown = __webpack_require__(452);

// CONCATENATED MODULE: ./src/dataLoaders/components/collectorsWizard/select/StreamingSelector.tsx








let StreamingSelector_StreamingSelector = class StreamingSelector extends react["PureComponent"] {
    constructor(props) {
        super(props);
        this.handleSelectBucket = (bucket) => {
            this.props.onSelectBucket(bucket);
        };
        this.handleToggle = (bundle) => {
            this.props.onTogglePluginBundle(bundle, this.isCardChecked(bundle));
        };
        this.handleFilterChange = (e) => {
            this.setState({ searchTerm: e.target.value });
        };
        this.handleFilterBlur = (e) => {
            this.setState({ searchTerm: e.target.value });
        };
        this.state = {
            gridSizerUpdateFlag: uuid_default.a.v4(),
            searchTerm: '',
        };
    }
    componentDidUpdate(prevProps) {
        const addFirst = prevProps.telegrafPlugins.length === 0 &&
            this.props.telegrafPlugins.length > 0;
        const removeLast = prevProps.telegrafPlugins.length > 0 &&
            this.props.telegrafPlugins.length === 0;
        if (addFirst || removeLast) {
            const gridSizerUpdateFlag = uuid_default.a.v4();
            this.setState({ gridSizerUpdateFlag });
        }
    }
    render() {
        const { buckets } = this.props;
        const { searchTerm } = this.state;
        const cardSize = `${100 / (this.filteredBundles.length + 1)}%`;
        return (react_default.a.createElement("div", { className: "wizard-step--grid-container" },
            react_default.a.createElement(dist["Grid"].Row, null,
                react_default.a.createElement(dist["Grid"].Column, { widthSM: dist["Columns"].Five },
                    react_default.a.createElement(dist["FormElement"], { label: "Bucket" },
                        react_default.a.createElement(BucketsDropdown["a" /* default */], { selectedBucketID: this.selectedBucketID, buckets: buckets, onSelectBucket: this.handleSelectBucket }))),
                react_default.a.createElement(dist["Grid"].Column, { widthSM: dist["Columns"].Five, offsetSM: dist["Columns"].Two },
                    react_default.a.createElement(dist["FormElement"], { label: "" },
                        react_default.a.createElement(dist["Input"], { className: "wizard-step--filter", size: dist["ComponentSize"].Small, icon: dist["IconFont"].Search, value: searchTerm, onBlur: this.handleFilterBlur, onChange: this.handleFilterChange, placeholder: "Filter Plugins..." })))),
            react_default.a.createElement(dist["SquareGrid"], { cardSize: cardSize, gutter: dist["ComponentSize"].Small }, this.filteredBundles.map(b => {
                return (react_default.a.createElement(dist["SquareGrid"].Card, { key: b },
                    react_default.a.createElement(dist["SelectableCard"], { id: b, formName: "telegraf-plugins", label: b, testID: `telegraf-plugins--${b}`, selected: this.isCardChecked(b), onClick: this.handleToggle, icon: dist["IconFont"].Checkmark }, Object(react["createElement"])(pluginConfigs["a" /* BUNDLE_LOGOS */][b]))));
            })),
            this.emptyState));
    }
    get selectedBucketID() {
        const { buckets, selectedBucketName } = this.props;
        return buckets.find(b => b.name === selectedBucketName).id;
    }
    get emptyState() {
        const { searchTerm } = this.state;
        const noMatches = this.filteredBundles.length === 0;
        if (searchTerm && noMatches) {
            return (react_default.a.createElement(dist["EmptyState"], { size: dist["ComponentSize"].Medium },
                react_default.a.createElement(dist["EmptyState"].Text, null, "No plugins match your search")));
        }
    }
    get filteredBundles() {
        const { searchTerm } = this.state;
        return pluginConfigs["b" /* PLUGIN_BUNDLE_OPTIONS */].filter(b => b.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    isCardChecked(bundle) {
        const { pluginBundles } = this.props;
        if (pluginBundles.find(b => b === bundle)) {
            return true;
        }
        return false;
    }
};
StreamingSelector_StreamingSelector = Object(tslib_es6["a" /* __decorate */])([
    errors["a" /* ErrorHandling */],
    Object(tslib_es6["b" /* __metadata */])("design:paramtypes", [Object])
], StreamingSelector_StreamingSelector);
/* harmony default export */ var select_StreamingSelector = (StreamingSelector_StreamingSelector);

// EXTERNAL MODULE: ./src/onboarding/components/OnboardingButtons.tsx
var OnboardingButtons = __webpack_require__(202);

// EXTERNAL MODULE: ./src/shared/components/fancy_scrollbar/FancyScrollbar.tsx
var FancyScrollbar = __webpack_require__(67);

// EXTERNAL MODULE: ./src/dataLoaders/actions/dataLoaders.ts
var dataLoaders = __webpack_require__(144);

// EXTERNAL MODULE: ./src/dataLoaders/actions/steps.ts
var steps = __webpack_require__(275);

// CONCATENATED MODULE: ./src/dataLoaders/components/collectorsWizard/select/SelectCollectorsStep.tsx











let SelectCollectorsStep_SelectCollectorsStep = class SelectCollectorsStep extends react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.handleSelectBucket = (bucket) => {
            const { orgID, id, name } = bucket;
            this.props.onSetBucketInfo(orgID, name, id);
        };
        this.handleTogglePluginBundle = (bundle, isSelected) => {
            if (isSelected) {
                this.props.onRemovePluginBundle(bundle);
                return;
            }
            this.props.onAddPluginBundle(bundle);
        };
    }
    render() {
        return (react_default.a.createElement(dist["Form"], { onSubmit: this.props.onIncrementCurrentStepIndex, className: "data-loading--form" },
            react_default.a.createElement(FancyScrollbar["a" /* default */], { autoHide: false, className: "data-loading--scroll-content" },
                react_default.a.createElement("div", null,
                    react_default.a.createElement("h3", { className: "wizard-step--title" }, "What do you want to monitor?"),
                    react_default.a.createElement("h5", { className: "wizard-step--sub-title" }, "Telegraf is a plugin-based data collection agent which writes metrics to a bucket in InfluxDB")),
                !!this.props.bucket && (react_default.a.createElement(select_StreamingSelector, { pluginBundles: this.props.pluginBundles, telegrafPlugins: this.props.telegrafPlugins, onTogglePluginBundle: this.handleTogglePluginBundle, buckets: this.props.buckets, selectedBucketName: this.props.bucket, onSelectBucket: this.handleSelectBucket })),
                react_default.a.createElement("h5", { className: "wizard-step--sub-title" },
                    "Looking for other things to monitor? Check out our 200+ other \u00A0",
                    react_default.a.createElement("a", { href: "https://v2.docs.influxdata.com/v2.0/reference/telegraf-plugins/#input-plugins", target: "_blank" }, "Telegraf Plugins"),
                    "\u00A0 and how to \u00A0",
                    react_default.a.createElement("a", { href: "https://v2.docs.influxdata.com/v2.0/write-data/use-telegraf/manual-config/", target: "_blank" }, "Configure these Plugins"))),
            react_default.a.createElement(OnboardingButtons["a" /* default */], { autoFocusNext: true, nextButtonStatus: this.nextButtonStatus, className: "data-loading--button-container" })));
    }
    get nextButtonStatus() {
        const { telegrafPlugins, buckets } = this.props;
        if (!buckets || !buckets.length) {
            return dist["ComponentStatus"].Disabled;
        }
        if (!telegrafPlugins.length) {
            return dist["ComponentStatus"].Disabled;
        }
        return dist["ComponentStatus"].Default;
    }
};
SelectCollectorsStep_SelectCollectorsStep = Object(tslib_es6["a" /* __decorate */])([
    errors["a" /* ErrorHandling */]
], SelectCollectorsStep_SelectCollectorsStep);

const mstp = ({ dataLoading: { dataLoaders: { telegrafPlugins, pluginBundles }, steps: { bucket }, }, }) => ({
    telegrafPlugins,
    bucket,
    pluginBundles,
});
const mdtp = {
    onAddPluginBundle: dataLoaders["b" /* addPluginBundleWithPlugins */],
    onRemovePluginBundle: dataLoaders["f" /* removePluginBundleWithPlugins */],
    onSetBucketInfo: steps["d" /* setBucketInfo */],
};
/* harmony default export */ var select_SelectCollectorsStep = (Object(es["b" /* connect */])(mstp, mdtp)(SelectCollectorsStep_SelectCollectorsStep));

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(6);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// EXTERNAL MODULE: ./src/shared/utils/validateURI.ts
var validateURI = __webpack_require__(404);

// CONCATENATED MODULE: ./src/shared/components/URIFormElement.tsx





const VALIDATE_DEBOUNCE_MS = 350;
class URIFormElement_URIFormElement extends react["PureComponent"] {
    constructor(props) {
        super(props);
        this.handleChange = (e) => {
            const { onChange } = this.props;
            const { value } = e.target;
            onChange(e);
            this.debouncedValidate(value);
        };
        this.handleValidateURI = (value) => {
            if (Object(validateURI["a" /* validateURI */])(value)) {
                this.setState({ status: dist["ComponentStatus"].Valid });
            }
            else {
                this.setState({ status: dist["ComponentStatus"].Error });
            }
        };
        this.state = {
            status: dist["ComponentStatus"].Default,
        };
        this.debouncedValidate = lodash_default.a.debounce(this.handleValidateURI, VALIDATE_DEBOUNCE_MS);
    }
    render() {
        const { name, value, autoFocus, helpText } = this.props;
        return (react_default.a.createElement(dist["Grid"], null,
            react_default.a.createElement(dist["Grid"].Row, null,
                react_default.a.createElement(dist["Grid"].Column, { widthXS: dist["Columns"].Eight, offsetXS: dist["Columns"].Two },
                    react_default.a.createElement(dist["FormElement"], { label: name, key: name, errorMessage: this.errorMessage, helpText: helpText },
                        react_default.a.createElement(dist["Input"], { name: name, autoFocus: autoFocus, status: this.state.status, onChange: this.handleChange, size: dist["ComponentSize"].Medium, value: value }))))));
    }
    get errorMessage() {
        const { status } = this.state;
        if (status === dist["ComponentStatus"].Error) {
            return 'Must be a valid URI.';
        }
    }
}
/* harmony default export */ var components_URIFormElement = (URIFormElement_URIFormElement);

// EXTERNAL MODULE: ./src/clockface/index.ts + 13 modules
var clockface = __webpack_require__(53);

// EXTERNAL MODULE: ./src/types/index.ts
var types = __webpack_require__(5);

// CONCATENATED MODULE: ./src/dataLoaders/components/configureStep/streaming/ArrayFormElement.tsx



class ArrayFormElement_ArrayFormElement extends react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.handleAddRow = (item) => {
            this.props.addTagValue(item, this.props.fieldName);
        };
        this.handleRemoveRow = (item) => {
            const { removeTagValue, fieldName } = this.props;
            removeTagValue(item, fieldName);
        };
        this.handleEditRow = (index, item) => {
            const { onSetConfigArrayValue, telegrafPluginName, fieldName } = this.props;
            onSetConfigArrayValue(telegrafPluginName, fieldName, index, item);
        };
    }
    render() {
        const { fieldName, autoFocus, helpText } = this.props;
        return (react_default.a.createElement("div", { className: "multiple-input-index" },
            react_default.a.createElement(clockface["i" /* MultipleInput */], { title: fieldName, helpText: helpText, inputType: this.inputType, autoFocus: autoFocus, onAddRow: this.handleAddRow, onDeleteRow: this.handleRemoveRow, onEditRow: this.handleEditRow, tags: this.tags })));
    }
    get inputType() {
        switch (this.props.fieldType) {
            case types["ConfigFieldType"].Uri:
            case types["ConfigFieldType"].UriArray:
                return clockface["h" /* MultiInputType */].URI;
            case types["ConfigFieldType"].String:
            case types["ConfigFieldType"].StringArray:
                return clockface["h" /* MultiInputType */].String;
        }
    }
    get tags() {
        const { value } = this.props;
        return value.map(v => {
            return { text: v, name: v };
        });
    }
}
/* harmony default export */ var streaming_ArrayFormElement = (ArrayFormElement_ArrayFormElement);

// EXTERNAL MODULE: ./src/types/dataLoaders.ts
var types_dataLoaders = __webpack_require__(126);

// CONCATENATED MODULE: ./src/dataLoaders/components/configureStep/streaming/ConfigFieldSwitcher.tsx






class ConfigFieldSwitcher_ConfigFieldSwitcher extends react["PureComponent"] {
    render() {
        const { fieldType, fieldName, onChange, value, onSetConfigArrayValue, telegrafPluginName, } = this.props;
        switch (fieldType) {
            case types_dataLoaders["c" /* ConfigFieldType */].Uri:
                return (react_default.a.createElement(components_URIFormElement, { name: fieldName, key: name, autoFocus: this.autoFocus, onChange: onChange, value: value, helpText: this.optionalText }));
            case types_dataLoaders["c" /* ConfigFieldType */].UriArray:
            case types_dataLoaders["c" /* ConfigFieldType */].StringArray:
                return (react_default.a.createElement(streaming_ArrayFormElement, { fieldName: fieldName, fieldType: fieldType, addTagValue: this.props.addTagValue, removeTagValue: this.props.removeTagValue, autoFocus: this.autoFocus, value: value, helpText: this.optionalText, onSetConfigArrayValue: onSetConfigArrayValue, telegrafPluginName: telegrafPluginName }));
            case types_dataLoaders["c" /* ConfigFieldType */].String:
                return (react_default.a.createElement(dist["Grid"], null,
                    react_default.a.createElement(dist["Grid"].Row, null,
                        react_default.a.createElement(dist["Grid"].Column, { widthXS: dist["Columns"].Eight, offsetXS: dist["Columns"].Two },
                            react_default.a.createElement(dist["Form"].Element, { label: fieldName, key: fieldName, helpText: this.optionalText },
                                react_default.a.createElement(dist["Input"], { name: fieldName, autoFocus: this.autoFocus, onChange: onChange, size: dist["ComponentSize"].Medium, value: value }))))));
            default:
                return react_default.a.createElement("div", null);
        }
    }
    get optionalText() {
        if (!this.props.isRequired) {
            return 'optional';
        }
        return '';
    }
    get autoFocus() {
        const { index } = this.props;
        return index === 0;
    }
}
/* harmony default export */ var streaming_ConfigFieldSwitcher = (ConfigFieldSwitcher_ConfigFieldSwitcher);

// CONCATENATED MODULE: ./src/dataLoaders/components/collectorsWizard/configure/ConfigFieldHandler.tsx






class ConfigFieldHandler_ConfigFieldHandler extends react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.handleAddConfigFieldValue = (value, fieldName) => {
            const { onAddConfigValue, telegrafPlugin } = this.props;
            onAddConfigValue(telegrafPlugin.name, fieldName, value);
        };
        this.handleRemoveConfigFieldValue = (value, fieldName) => {
            const { onRemoveConfigValue, telegrafPlugin } = this.props;
            onRemoveConfigValue(telegrafPlugin.name, fieldName, value);
        };
        this.handleUpdateConfigField = (e) => {
            const { onUpdateTelegrafPluginConfig, telegrafPlugin } = this.props;
            const { name, value } = e.target;
            onUpdateTelegrafPluginConfig(telegrafPlugin.name, name, value);
        };
    }
    render() {
        return react_default.a.createElement("div", null, this.formFields);
    }
    get formFields() {
        const { configFields, telegrafPlugin, onSetConfigArrayValue } = this.props;
        if (!configFields) {
            return react_default.a.createElement("p", { "data-testid": "no-config" }, "No configuration required.");
        }
        return Object.entries(configFields).map(([fieldName, { type: fieldType, isRequired }], i) => {
            return (react_default.a.createElement(streaming_ConfigFieldSwitcher, { key: fieldName, fieldName: fieldName, fieldType: fieldType, index: i, onChange: this.handleUpdateConfigField, value: this.getFieldValue(telegrafPlugin, fieldName, fieldType), isRequired: isRequired, addTagValue: this.handleAddConfigFieldValue, removeTagValue: this.handleRemoveConfigFieldValue, onSetConfigArrayValue: onSetConfigArrayValue, telegrafPluginName: telegrafPlugin.name }));
        });
    }
    getFieldValue(telegrafPlugin, fieldName, fieldType) {
        let defaultEmpty;
        if (fieldType === types_dataLoaders["c" /* ConfigFieldType */].String ||
            fieldType === types_dataLoaders["c" /* ConfigFieldType */].Uri) {
            defaultEmpty = '';
        }
        else {
            defaultEmpty = [];
        }
        return lodash_default.a.get(telegrafPlugin, `plugin.config.${fieldName}`, defaultEmpty);
    }
}
const ConfigFieldHandler_mdtp = {
    onUpdateTelegrafPluginConfig: dataLoaders["r" /* updateTelegrafPluginConfig */],
    onAddConfigValue: dataLoaders["a" /* addConfigValue */],
    onRemoveConfigValue: dataLoaders["e" /* removeConfigValue */],
    onSetConfigArrayValue: dataLoaders["i" /* setConfigArrayValue */],
};
/* harmony default export */ var configure_ConfigFieldHandler = (Object(es["b" /* connect */])(null, ConfigFieldHandler_mdtp)(ConfigFieldHandler_ConfigFieldHandler));

// CONCATENATED MODULE: ./src/dataLoaders/components/collectorsWizard/configure/PluginConfigForm.tsx








class PluginConfigForm_PluginConfigForm extends react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.handleSubmitForm = () => {
            const { telegrafPlugins, onSetPluginConfiguration, onSetActiveTelegrafPlugin, } = this.props;
            const activeTelegrafPlugin = telegrafPlugins.find(tp => tp.active);
            if (!!activeTelegrafPlugin) {
                if (!activeTelegrafPlugin.hasOwnProperty('plugin')) {
                    return;
                }
                onSetPluginConfiguration(activeTelegrafPlugin.name);
            }
            onSetActiveTelegrafPlugin('');
        };
    }
    render() {
        const { configFields, telegrafPlugin } = this.props;
        return (react_default.a.createElement(dist["Form"], { onSubmit: this.handleSubmitForm, className: "data-loading--form" },
            react_default.a.createElement(FancyScrollbar["a" /* default */], { autoHide: false, className: "data-loading--scroll-content" },
                react_default.a.createElement("div", null,
                    react_default.a.createElement("h3", { className: "wizard-step--title" }, lodash_default.a.startCase(telegrafPlugin.name)),
                    react_default.a.createElement("h5", { className: "wizard-step--sub-title" },
                        "For more information about this plugin, see",
                        ' ',
                        react_default.a.createElement("a", { target: "_blank", "data-testid": "docs-link", href: `https://github.com/influxdata/telegraf/tree/master/plugins/inputs/${telegrafPlugin.name}` }, "Documentation"))),
                react_default.a.createElement(configure_ConfigFieldHandler, { configFields: configFields, telegrafPlugin: telegrafPlugin })),
            react_default.a.createElement(OnboardingButtons["a" /* default */], { autoFocusNext: this.autoFocus, nextButtonText: "Done", className: "data-loading--button-container" })));
    }
    get autoFocus() {
        const { configFields } = this.props;
        return !configFields;
    }
}
const PluginConfigForm_mstp = ({ dataLoading: { dataLoaders: { telegrafPlugins }, }, }) => ({
    telegrafPlugins,
});
const PluginConfigForm_mdtp = {
    onSetActiveTelegrafPlugin: dataLoaders["h" /* setActiveTelegrafPlugin */],
    onSetPluginConfiguration: dataLoaders["m" /* setPluginConfiguration */],
};
/* harmony default export */ var configure_PluginConfigForm = (Object(es["b" /* connect */])(PluginConfigForm_mstp, PluginConfigForm_mdtp)(PluginConfigForm_PluginConfigForm));

// CONCATENATED MODULE: ./src/dataLoaders/components/configureStep/EmptyDataSourceState.tsx

class EmptyDataSourceState_EmptyDataSourceState extends react["PureComponent"] {
    render() {
        return react_default.a.createElement("div", null, "Must select a data source.");
    }
}
/* harmony default export */ var configureStep_EmptyDataSourceState = (EmptyDataSourceState_EmptyDataSourceState);

// EXTERNAL MODULE: ./src/dataLoaders/utils/pluginConfigs.ts
var utils_pluginConfigs = __webpack_require__(403);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(34);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./src/dataLoaders/components/side_bar/SideBarTab.tsx




class SideBarTab_SideBarTab extends react["Component"] {
    constructor() {
        super(...arguments);
        this.handleClick = () => {
            const { id, onClick } = this.props;
            onClick(id);
        };
    }
    render() {
        const { label } = this.props;
        return (react_default.a.createElement("div", { className: this.className, onClick: this.handleClick },
            this.icon,
            label));
    }
    get className() {
        const { status, active } = this.props;
        return classnames_default()('side-bar--tab', {
            active,
            'side-bar--tab__success': status === SideBarTabStatus.Success,
            'side-bar--tab__error': status === SideBarTabStatus.Error,
            'side-bar--tab__pending': status === SideBarTabStatus.Pending,
        });
    }
    get icon() {
        const { status } = this.props;
        let icon;
        switch (status) {
            case SideBarTabStatus.Pending:
            case SideBarTabStatus.Success:
                icon = `side-bar--icon icon ${clockface["g" /* IconFont */].Checkmark}`;
                break;
            case SideBarTabStatus.Error:
                icon = `side-bar--icon icon ${clockface["g" /* IconFont */].Remove}`;
                break;
            case SideBarTabStatus.Default:
                icon = `side-bar--icon icon ${clockface["g" /* IconFont */].CircleThick}`;
                break;
            default:
                icon = `side-bar--icon`;
        }
        return react_default.a.createElement("span", { className: icon });
    }
}
/* harmony default export */ var side_bar_SideBarTab = (SideBarTab_SideBarTab);

// CONCATENATED MODULE: ./src/dataLoaders/components/side_bar/SideBarButton.tsx


class SideBarButton_SideBarButton extends react["Component"] {
    render() {
        const { text, titleText, color, onClick, icon } = this.props;
        return (react_default.a.createElement(dist["Button"], { className: "side-bar--button", text: text, titleText: titleText, onClick: onClick, size: dist["ComponentSize"].Small, color: color, icon: icon }));
    }
}
/* harmony default export */ var side_bar_SideBarButton = (SideBarButton_SideBarButton);

// CONCATENATED MODULE: ./src/dataLoaders/components/side_bar/SideBar.tsx





var SideBarTabStatus;
(function (SideBarTabStatus) {
    SideBarTabStatus["Default"] = "default";
    SideBarTabStatus["Error"] = "error";
    SideBarTabStatus["Success"] = "success";
    SideBarTabStatus["Pending"] = "pending";
    SideBarTabStatus["Blank"] = "blank";
})(SideBarTabStatus || (SideBarTabStatus = {}));
class SideBar_SideBar extends react["Component"] {
    render() {
        const { title } = this.props;
        return (react_default.a.createElement("div", { className: this.containerClassName },
            react_default.a.createElement("div", { className: "side-bar--container" },
                react_default.a.createElement("h3", { className: "side-bar--title" }, title),
                react_default.a.createElement(FancyScrollbar["a" /* default */], { autoHide: false },
                    react_default.a.createElement("div", { className: "side-bar--tabs" }, this.childTabs)))));
    }
    get containerClassName() {
        const { visible } = this.props;
        return classnames_default()('side-bar', { show: visible });
    }
    get childTabs() {
        const { children } = this.props;
        return react_default.a.Children.map(children, (child) => {
            if (child.type === side_bar_SideBarTab) {
                return child;
            }
        });
    }
}
SideBar_SideBar.Tab = side_bar_SideBarTab;
SideBar_SideBar.Button = side_bar_SideBarButton;
/* harmony default export */ var side_bar_SideBar = (SideBar_SideBar);

// CONCATENATED MODULE: ./src/dataLoaders/components/collectorsWizard/configure/PluginsSideBar.tsx




const configStateToTabStatus = (cs) => {
    switch (cs) {
        case types_dataLoaders["d" /* ConfigurationState */].Unconfigured:
            return SideBarTabStatus.Default;
        case types_dataLoaders["d" /* ConfigurationState */].InvalidConfiguration:
            return SideBarTabStatus.Error;
        case types_dataLoaders["d" /* ConfigurationState */].Configured:
            return SideBarTabStatus.Success;
    }
};
class PluginsSideBar_PluginsSideBar extends react["Component"] {
    render() {
        const { title, visible } = this.props;
        return (react_default.a.createElement(side_bar_SideBar, { title: title, visible: visible }, this.tabs));
    }
    get tabs() {
        const { telegrafPlugins, onTabClick } = this.props;
        return telegrafPlugins.map(t => (react_default.a.createElement(side_bar_SideBar.Tab, { label: t.name, key: t.name, id: t.name, active: t.active, status: configStateToTabStatus(t.configured), onClick: onTabClick })));
    }
}
/* harmony default export */ var configure_PluginsSideBar = (PluginsSideBar_PluginsSideBar);

// EXTERNAL MODULE: ./src/shared/actions/notifications.ts
var notifications = __webpack_require__(33);

// EXTERNAL MODULE: ./src/templates/api/index.ts + 1 modules
var api = __webpack_require__(278);

// EXTERNAL MODULE: ./src/shared/copy/notifications.ts + 1 modules
var copy_notifications = __webpack_require__(35);

// EXTERNAL MODULE: ./src/templates/constants/defaultTemplates.ts
var defaultTemplates = __webpack_require__(165);

// EXTERNAL MODULE: ./src/organizations/selectors/index.ts
var selectors = __webpack_require__(19);

// EXTERNAL MODULE: ./src/dataLoaders/selectors/index.ts
var dataLoaders_selectors = __webpack_require__(841);

// CONCATENATED MODULE: ./src/dataLoaders/components/collectorsWizard/configure/TelegrafPluginInstructions.tsx

















class TelegrafPluginInstructions_TelegrafPluginInstructions extends react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.handleFormSubmit = () => {
            const { onSaveTelegrafConfig, telegrafConfigID } = this.props;
            onSaveTelegrafConfig();
            if (!telegrafConfigID) {
                this.handleCreateDashboardsForPlugins();
            }
            this.props.onIncrementStep();
        };
        this.handleNameInput = (e) => {
            this.props.onSetTelegrafConfigName(e.target.value);
        };
        this.handleDescriptionInput = (e) => {
            this.props.onSetTelegrafConfigDescription(e.target.value);
        };
        this.handleClickSideBarTab = (tabID) => {
            const { onSetActiveTelegrafPlugin, telegrafPlugins, onSetPluginConfiguration, } = this.props;
            const activeTelegrafPlugin = telegrafPlugins.find(tp => tp.active);
            if (!!activeTelegrafPlugin) {
                onSetPluginConfiguration(activeTelegrafPlugin.name);
            }
            onSetActiveTelegrafPlugin(tabID);
        };
    }
    render() {
        const { telegrafConfigName, telegrafConfigDescription, telegrafPlugins, onDecrementStep, } = this.props;
        return (react_default.a.createElement(dist["Form"], { onSubmit: this.handleFormSubmit, className: "data-loading--form" },
            react_default.a.createElement("div", { className: "data-loading--scroll-content" },
                react_default.a.createElement("div", null,
                    react_default.a.createElement("h3", { className: "wizard-step--title" }, "Configure Plugins"),
                    react_default.a.createElement("h5", { className: "wizard-step--sub-title" }, "Configure each plugin from the menu on the left. Some plugins do not require any configuration.")),
                react_default.a.createElement("div", { className: "data-loading--columns" },
                    react_default.a.createElement(configure_PluginsSideBar, { telegrafPlugins: telegrafPlugins, onTabClick: this.handleClickSideBarTab, title: "Plugins", visible: this.sideBarVisible }),
                    react_default.a.createElement("div", { className: "data-loading--column-panel" },
                        react_default.a.createElement(FancyScrollbar["a" /* default */], { autoHide: false, className: "data-loading--scroll-content" },
                            react_default.a.createElement(dist["Form"].Element, { label: "Telegraf Configuration Name" },
                                react_default.a.createElement(dist["Input"], { type: dist["InputType"].Text, value: telegrafConfigName, name: "name", onChange: this.handleNameInput, titleText: "Telegraf Configuration Name", size: dist["ComponentSize"].Medium, autoFocus: true })),
                            react_default.a.createElement(dist["Form"].Element, { label: "Telegraf Configuration Description" },
                                react_default.a.createElement(dist["Input"], { type: dist["InputType"].Text, value: telegrafConfigDescription, name: "description", onChange: this.handleDescriptionInput, titleText: "Telegraf Configuration Description", size: dist["ComponentSize"].Medium })))))),
            react_default.a.createElement(OnboardingButtons["a" /* default */], { onClickBack: onDecrementStep, nextButtonText: "Create and Verify", className: "data-loading--button-container" })));
    }
    async handleCreateDashboardsForPlugins() {
        const { notify, telegrafPlugins, orgID } = this.props;
        try {
            const configuredPlugins = telegrafPlugins.filter(tp => tp.configured === types["ConfigurationState"].Configured);
            const configuredPluginTemplateIdentifiers = configuredPlugins
                .map(t => t.templateID)
                .filter(t => t);
            const templatesToInstantiate = defaultTemplates["a" /* influxdbTemplateList */].filter(t => {
                return Object(lodash["includes"])(configuredPluginTemplateIdentifiers, Object(lodash["get"])(t, 'meta.templateID'));
            });
            const pendingDashboards = templatesToInstantiate.map(t => Object(api["a" /* createDashboardFromTemplate */])(t, orgID));
            const pendingDashboardNames = templatesToInstantiate.map(t => t.meta.name.toLowerCase());
            const dashboards = await Promise.all(pendingDashboards);
            if (dashboards.length) {
                notify(Object(copy_notifications["j" /* TelegrafDashboardCreated */])(pendingDashboardNames));
            }
        }
        catch (err) {
            notify(Object(copy_notifications["k" /* TelegrafDashboardFailed */])());
        }
    }
    get sideBarVisible() {
        const { telegrafPlugins } = this.props;
        return telegrafPlugins.length > 0;
    }
}
const TelegrafPluginInstructions_mstp = (state) => {
    const { telegrafConfigName, telegrafConfigDescription, telegrafPlugins, telegrafConfigID, } = Object(dataLoaders_selectors["a" /* getDataLoaders */])(state);
    const { id: orgID } = Object(selectors["a" /* getOrg */])(state);
    return {
        telegrafConfigName,
        telegrafConfigDescription,
        telegrafPlugins,
        telegrafConfigID,
        orgID,
    };
};
const TelegrafPluginInstructions_mdtp = {
    onSetTelegrafConfigName: dataLoaders["q" /* setTelegrafConfigName */],
    onSetTelegrafConfigDescription: dataLoaders["o" /* setTelegrafConfigDescription */],
    onIncrementStep: steps["c" /* incrementCurrentStepIndex */],
    onDecrementStep: steps["b" /* decrementCurrentStepIndex */],
    onSetActiveTelegrafPlugin: dataLoaders["h" /* setActiveTelegrafPlugin */],
    onSetPluginConfiguration: dataLoaders["m" /* setPluginConfiguration */],
    onSaveTelegrafConfig: dataLoaders["d" /* createOrUpdateTelegrafConfigAsync */],
    notify: notifications["c" /* notify */],
};
/* harmony default export */ var configure_TelegrafPluginInstructions = (Object(es["b" /* connect */])(TelegrafPluginInstructions_mstp, TelegrafPluginInstructions_mdtp)(TelegrafPluginInstructions_TelegrafPluginInstructions));

// CONCATENATED MODULE: ./src/dataLoaders/components/collectorsWizard/configure/PluginConfigSwitcher.tsx






class PluginConfigSwitcher_PluginConfigSwitcher extends react["PureComponent"] {
    render() {
        const { telegrafPlugins } = this.props;
        if (this.activeTelegrafPlugin) {
            return (react_default.a.createElement(configure_PluginConfigForm, { telegrafPlugin: this.activeTelegrafPlugin, configFields: this.configFields }));
        }
        else if (!telegrafPlugins || !telegrafPlugins.length) {
            return react_default.a.createElement(configureStep_EmptyDataSourceState, null);
        }
        return react_default.a.createElement(configure_TelegrafPluginInstructions, null);
    }
    get activeTelegrafPlugin() {
        const { telegrafPlugins } = this.props;
        return telegrafPlugins.find(tp => tp.active);
    }
    get configFields() {
        if (this.activeTelegrafPlugin) {
            return Object(utils_pluginConfigs["b" /* getConfigFields */])(this.activeTelegrafPlugin.name);
        }
    }
}
const PluginConfigSwitcher_mstp = ({ dataLoading: { dataLoaders: { telegrafPlugins }, }, }) => ({
    telegrafPlugins,
});
/* harmony default export */ var configure_PluginConfigSwitcher = (Object(es["b" /* connect */])(PluginConfigSwitcher_mstp, null)(PluginConfigSwitcher_PluginConfigSwitcher));

// EXTERNAL MODULE: ./src/dataLoaders/components/verifyStep/TelegrafInstructions.tsx
var TelegrafInstructions = __webpack_require__(842);

// EXTERNAL MODULE: ./node_modules/react-router/es/index.js + 32 modules
var react_router_es = __webpack_require__(12);

// EXTERNAL MODULE: ./src/shared/apis/query.ts
var query = __webpack_require__(152);

// CONCATENATED MODULE: ./src/dataLoaders/components/verifyStep/ConnectionInformation.tsx



var LoadingState;
(function (LoadingState) {
    LoadingState["NotStarted"] = "NotStarted";
    LoadingState["Loading"] = "Loading";
    LoadingState["Done"] = "Done";
    LoadingState["NotFound"] = "NotFound";
    LoadingState["Error"] = "Error";
})(LoadingState || (LoadingState = {}));
let ConnectionInformation_ConnectionInformation = class ConnectionInformation extends react["PureComponent"] {
    render() {
        return (react_default.a.createElement("div", null,
            react_default.a.createElement("h4", { className: `wizard-step--text-state ${this.className}` }, this.header),
            react_default.a.createElement("p", null, this.additionalText)));
    }
    get className() {
        switch (this.props.loading) {
            case LoadingState.Loading:
                return 'loading';
            case LoadingState.Done:
                return 'success';
            case LoadingState.NotFound:
            case LoadingState.Error:
                return 'error';
        }
    }
    get header() {
        switch (this.props.loading) {
            case LoadingState.Loading:
                return 'Awaiting Connection...';
            case LoadingState.Done:
                return 'Connection Found!';
            case LoadingState.NotFound:
                return 'Data Not Found';
            case LoadingState.Error:
                return 'Error Listening for Data';
        }
    }
    get additionalText() {
        switch (this.props.loading) {
            case LoadingState.Loading:
                return `Timeout in ${this.props.countDownSeconds} seconds`;
            case LoadingState.Done:
                return `${this.props.bucket} is receiving data loud and clear!`;
            case LoadingState.NotFound:
            case LoadingState.Error:
                return 'Check config and try again';
        }
    }
};
ConnectionInformation_ConnectionInformation = Object(tslib_es6["a" /* __decorate */])([
    errors["a" /* ErrorHandling */]
], ConnectionInformation_ConnectionInformation);
/* harmony default export */ var verifyStep_ConnectionInformation = (ConnectionInformation_ConnectionInformation);

// CONCATENATED MODULE: ./src/dataLoaders/components/verifyStep/DataListening.tsx







const MINUTE = 60000;
const FETCH_WAIT = 5000;
const SECONDS = 60;
const TIMER_WAIT = 1000;
let DataListening_DataListening = class DataListening extends react["PureComponent"] {
    constructor(props) {
        super(props);
        this.handleClick = () => {
            this.startTimer();
            this.setState({ loading: LoadingState.Loading });
            this.startTime = Number(new Date());
            this.checkForData();
        };
        this.checkForData = async () => {
            const { bucket, params: { orgID }, } = this.props;
            const { secondsLeft } = this.state;
            const script = `from(bucket: "${bucket}")
      |> range(start: -1m)`;
            let responseLength;
            let timePassed;
            try {
                const result = await Object(query["a" /* runQuery */])(orgID, script).promise;
                if (result.type !== 'SUCCESS') {
                    throw new Error(result.message);
                }
                responseLength = result.csv.length;
                timePassed = Number(new Date()) - this.startTime;
            }
            catch (err) {
                this.setState({ loading: LoadingState.Error });
                return;
            }
            if (responseLength > 1) {
                this.setState({ loading: LoadingState.Done });
                return;
            }
            if (timePassed >= MINUTE || secondsLeft <= 0) {
                this.setState({ loading: LoadingState.NotFound });
                return;
            }
            this.intervalID = setTimeout(() => {
                this.checkForData();
            }, FETCH_WAIT);
        };
        this.countDown = () => {
            const { secondsLeft } = this.state;
            const secs = secondsLeft - 1;
            this.setState({
                timePassedInSeconds: SECONDS - secs,
                secondsLeft: secs,
            });
            if (secs === 0) {
                clearInterval(this.timer);
            }
        };
        this.state = {
            loading: LoadingState.NotStarted,
            timePassedInSeconds: 0,
            secondsLeft: SECONDS,
        };
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
        clearInterval(this.timer);
        this.setState({
            timePassedInSeconds: 0,
            secondsLeft: SECONDS,
        });
    }
    render() {
        return (react_default.a.createElement("div", { className: "wizard-step--body-streaming", "data-testid": "streaming" },
            this.connectionInfo,
            this.listenButton));
    }
    get connectionInfo() {
        const { loading } = this.state;
        if (loading === LoadingState.NotStarted) {
            return;
        }
        return (react_default.a.createElement(verifyStep_ConnectionInformation, { loading: this.state.loading, bucket: this.props.bucket, countDownSeconds: this.state.secondsLeft }));
    }
    get listenButton() {
        const { loading } = this.state;
        if (loading === LoadingState.Loading || loading === LoadingState.Done) {
            return;
        }
        return (react_default.a.createElement(dist["Button"], { color: dist["ComponentColor"].Primary, text: "Listen for Data", size: dist["ComponentSize"].Medium, onClick: this.handleClick, status: dist["ComponentStatus"].Default, titleText: "Listen for Data" }));
    }
    startTimer() {
        this.setState({ timePassedInSeconds: 0, secondsLeft: SECONDS });
        this.timer = setInterval(this.countDown, TIMER_WAIT);
    }
};
DataListening_DataListening = Object(tslib_es6["a" /* __decorate */])([
    errors["a" /* ErrorHandling */],
    Object(tslib_es6["b" /* __metadata */])("design:paramtypes", [Object])
], DataListening_DataListening);
/* harmony default export */ var verifyStep_DataListening = (Object(react_router_es["g" /* withRouter */])(DataListening_DataListening));

// CONCATENATED MODULE: ./src/dataLoaders/components/verifyStep/DataStreaming.tsx





let DataStreaming_DataStreaming = class DataStreaming extends react["PureComponent"] {
    render() {
        const { token, configID, bucket } = this.props;
        return (react_default.a.createElement("div", { className: "streaming" },
            react_default.a.createElement(TelegrafInstructions["a" /* default */], { token: token, configID: configID }),
            react_default.a.createElement(verifyStep_DataListening, { bucket: bucket })));
    }
};
DataStreaming_DataStreaming = Object(tslib_es6["a" /* __decorate */])([
    errors["a" /* ErrorHandling */]
], DataStreaming_DataStreaming);
/* harmony default export */ var verifyStep_DataStreaming = (DataStreaming_DataStreaming);

// CONCATENATED MODULE: ./src/dataLoaders/components/collectorsWizard/verify/VerifyCollectorsStep.tsx








let VerifyCollectorsStep_VerifyCollectorStep = class VerifyCollectorStep extends react["PureComponent"] {
    render() {
        const { telegrafConfigID, bucket, org, onDecrementCurrentStepIndex, onExit, token, } = this.props;
        return (react_default.a.createElement(dist["Form"], { onSubmit: onExit, className: "data-loading--form" },
            react_default.a.createElement(FancyScrollbar["a" /* default */], { autoHide: false, className: "data-loading--scroll-content" },
                react_default.a.createElement("div", null,
                    react_default.a.createElement("h3", { className: "wizard-step--title" }, "Test your Configuration"),
                    react_default.a.createElement("h5", { className: "wizard-step--sub-title" }, "Start Telegraf and ensure data is being written to InfluxDB")),
                react_default.a.createElement(verifyStep_DataStreaming, { org: org, bucket: bucket, token: token, configID: telegrafConfigID })),
            react_default.a.createElement(OnboardingButtons["a" /* default */], { onClickBack: onDecrementCurrentStepIndex, nextButtonText: "Finish", className: "data-loading--button-container" })));
    }
};
VerifyCollectorsStep_VerifyCollectorStep = Object(tslib_es6["a" /* __decorate */])([
    errors["a" /* ErrorHandling */]
], VerifyCollectorsStep_VerifyCollectorStep);

const VerifyCollectorsStep_mstp = ({ dataLoading: { dataLoaders: { telegrafConfigID, token }, steps: { bucket, org }, }, me: { name }, }) => ({
    username: name,
    telegrafConfigID,
    bucket,
    org,
    token,
});
/* harmony default export */ var VerifyCollectorsStep = (Object(es["b" /* connect */])(VerifyCollectorsStep_mstp)(VerifyCollectorsStep_VerifyCollectorStep));

// CONCATENATED MODULE: ./src/dataLoaders/components/collectorsWizard/CollectorsStepSwitcher.tsx







let CollectorsStepSwitcher_StepSwitcher = class StepSwitcher extends react["PureComponent"] {
    render() {
        const { stepProps, buckets } = this.props;
        switch (stepProps.currentStepIndex) {
            case types_dataLoaders["b" /* CollectorsStep */].Select:
                return react_default.a.createElement(select_SelectCollectorsStep, Object.assign({}, stepProps, { buckets: buckets }));
            case types_dataLoaders["b" /* CollectorsStep */].Configure:
                return react_default.a.createElement(configure_PluginConfigSwitcher, null);
            case types_dataLoaders["b" /* CollectorsStep */].Verify:
                return react_default.a.createElement(VerifyCollectorsStep, Object.assign({}, stepProps));
            default:
                return react_default.a.createElement("div", null);
        }
    }
};
CollectorsStepSwitcher_StepSwitcher = Object(tslib_es6["a" /* __decorate */])([
    errors["a" /* ErrorHandling */]
], CollectorsStepSwitcher_StepSwitcher);
/* harmony default export */ var CollectorsStepSwitcher = __webpack_exports__["default"] = (CollectorsStepSwitcher_StepSwitcher);


/***/ })

}]);
//# sourceMappingURL=6.index.js.map