/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import PropTypes from 'prop-types';

import { TranslatedStringType } from 'Type/TranslatedString';

export const BreadcrumbType = PropTypes.shape({
    url: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string
    ]),
    name: TranslatedStringType
});

export const BreadcrumbsType = PropTypes.arrayOf(BreadcrumbType);
