/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module ckfinder/ckfinderediting
 */

import { Plugin } from 'ckeditor5/src/core';
import { Notification } from 'ckeditor5/src/ui';

// TODO: softRequires()
// import ImageEditing from '@ckeditor/ckeditor5-image/src/image/imageediting';
// import LinkEditing from '@ckeditor/ckeditor5-link/src/linkediting';

import CKFinderCommand from './ckfindercommand';

/**
 * The CKFinder editing feature. It introduces the {@link module:ckfinder/ckfindercommand~CKFinderCommand CKFinder command}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class CKFinderEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'CKFinderEditing';
	}

	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [ Notification ];
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;

		editor.commands.add( 'ckfinder', new CKFinderCommand( editor ) );
	}
}
