import { ReactNode, ReactElement } from 'react'

interface Options {
	/** Defaults to the page's protocol. This property will be ignored if a protocol is already specified in the `baseUrl` */
	protocol?: 'http' | 'https'
	/** The complete url to the emoji assets. You can also provider a protocol-less url. Eg: `'//twemoji.maxcdn.com/2/'` */
	baseUrl? : string
	/** The size of image to load. Eg: `'72x72'`. If loading svg files provide an empty string `''` */
	size? : string,
	/** the type of file to load. Eg. `'.png'`, `'.svg'` */
	ext: string,
	/** Additional props to merge into to the rendered `<img>` tag. This is usually used for specifying custom `style` or `className` props. */
	props?: any
}

interface RenderEmoji extends Function {
	/**
	 * @param code The unicode value for the emoji. This is usually used to construct the source url.
	 * @param string The original string version of the emoji. This is usually used as the `alt` attribute to make copy and paste behave as expected.
	 * @param offset The zero-based position of the emoji in the original string. This is safe to use as the `key` attribute on the returned jsx element.
	 */
	(code : string, string : string, offset : number) : ReactNode

}

/**
 * 
 * @param element The object to be emojified. Can be a simple string or an array which mixes react elements and strings. When an array is processed, all react elements are simply skipped but still get included in the output.
 * @param options Options for basic customization pass in an options object to specify how image urls are constructed.
 */
declare function emoji (element : ReactNode, options? : Options) : ReactElement
/**
 * 
 * @param element The object to be emojified. Can be a simple string or an array which mixes react elements and strings. When an array is processed, all react elements are simply skipped but still get included in the output.
 * @param Render For complete control over the output emoji, pass a function instead of an options object.
 */
declare function emoji (element : ReactNode, Render : RenderEmoji) : ReactElement

export default emoji