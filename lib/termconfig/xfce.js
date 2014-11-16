/*
	The Cedric's Swiss Knife (CSK) - CSK terminal toolbox
	
	Copyright (c) 2009 - 2014 Cédric Ronvel 
	
	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/



var tree = require( 'tree-kit' ) ;
var xterm256 = require( './xterm-256color.js' ) ;



var esc = tree.extend( null , Object.create( xterm256.esc ) , {
	
	// Cursor styles
	
	//* It looks like there is no way to change the cursor shape in XFCE
	blockCursor: { on: '' } ,
	blinkingBlockCursor: { on: '' } ,
	underlineCursor: { on: '' } ,
	blinkingUnderlineCursor: { on: '' } ,
	beamCursor: { on: '' } ,
	blinkingBeamCursor: { on: '' }
	//*/
} ) ;





var keymap = Object.create( xterm256.keymap ) ;
var handler = Object.create( xterm256.handler ) ;



module.exports = {
	esc: esc ,
	keymap: keymap ,
	handler: handler ,
	colorRegister: require( '../colorScheme/xfce.json' )
} ;
