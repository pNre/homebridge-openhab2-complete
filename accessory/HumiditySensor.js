'use strict';

import {NumericSensorAccessory} from './NumericSensor';
import {addBatteryWarningCharacteristic} from "./characteristic/Battery";

export class HumiditySensorAccessory extends NumericSensorAccessory {
    constructor(platform, config) {
        super(platform, config);

        this._services = [
            this._getAccessoryInformationService('Humidity Sensor'),
            this._getPrimaryService()
        ]
    }

    _getPrimaryService() {
        let primaryService = this._configureNumericService(
            new this.Service.HumiditySensor(this.name),
            this.Characteristic.CurrentRelativeHumidity
        );

        addBatteryWarningCharacteristic(this, primaryService);

        return primaryService;
    }
}
