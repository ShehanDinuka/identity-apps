/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { AppConstants } from "../../core/constants";

export const getUserWizardStepIcons = () => {

    const theme: string = AppConstants && AppConstants.getAppTheme() && AppConstants.getAppTheme().name;

    return {
        general: import(`../../../themes/${ theme }/assets/images/icons/document-icon.svg`),
        groups: import(`../../../themes/${ theme }/assets/images/icons/gears-icon.svg`),
        roles: import(`../../../themes/${ theme }/assets/images/icons/spin-wheel-icon.svg`),
        summary: import(`../../../themes/${ theme }/assets/images/icons/report-icon.svg`),
        user: import(`../../../themes/${ theme }/assets/images/icons/user-icon.svg`)
    };
};

export const getUserSessionAccordionIcons = () => {

    const theme: string = AppConstants && AppConstants.getAppTheme() && AppConstants.getAppTheme().name;

    return {
        terminate: import(`../../../themes/${ theme }/assets/images/icons/forbidden-icon.svg`)
    };
};
