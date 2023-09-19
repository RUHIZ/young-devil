/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @oncall react_native
 */

// Compatibility module for tools which don't support the "exports" field (i.e.
// Metro). For Flow, we map to src/ from .flowconfig.

module.exports = require('./dist/registry.flow');
