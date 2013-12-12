FOTools
=======

Repo for simple FOnline Reloaded Modding Tools

Text Splitter
===
A simple script that takes a PSD in Photoshop and splits a single layer of text into single layers
for each character. This makes it easy to use the other tool...

FOFNT Maker
===
This script takes a PSD of single-character text layers and creates an FOFNT file based on those layers
for use in FOnline Reloaded. Instead of hand-coding the x/y coords, width, height, and offsets, this script
will attempt to infer this information for you. Then, save your PSD as a PNG and add the following to the
top of the generated FOFNT file:

    Image <Your Png Name>
	YAdvance 1

Usage
===
To use either, make sure you have a PSD open in PhotoShop (CS6 used for testing) and go to File - Scripts - Browse
and open the script you want to use. 

Notes on the FOFNT Format
===

	I have no idea what "YAdvance" does
	OffsetY is used to give a "baseline" to characters - 'j,' 'q,' etc need a lower OffsetY
	XAdvance is the space given to the character in total - so if it's width is 8, it's XAdvance
		of 9 would give an additional pixel buffer after the letter (kerning-esque?)

