export class ArrayManager {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	constructor() {}

	/**
	 * ES6 approach: Build a tree array from  a flat array
	 * @link: https://stackoverflow.com/questions/18017869/build-tree-array-from-flat-array-in-javascript
	 *
	 * @date 2022-07-17
	 * @param {array} items
	 * @param {number} id=null
	 * @param {string} link example: 'parentId' would be the connector with the 'id'
	 * @returns {array} Converts a flat array to a tree version
	 */
	public static flat2Tree(
		items: any[],
		id: number | null = null,
		link: string = 'parentId'
	): Array<unknown> {
		return items
			.filter((item: { [x: string]: number | null }) => item[link] === id)
			.map((item: { id: number | null | undefined }) => ({
				...item,
				children: ArrayManager.flat2Tree(items, item.id)
			}));
	}

	/**
	 * Transform the navigation array for Flowbite
	 * @date 2022-08-15
	 * @param {any} items:any[]
	 * @returns {any}
	 */
	public static transformNavigation(items: any[]): Array<unknown> {
		return items.map(function (v, i) {
			let copy = {};
			for (let key in v) {
				if (key == 'label') {
					copy['name'] = v['label'];
				}
				if (key == 'uri') {
					copy['href'] = v['uri'];
				}
				if (key != 'label' && key != 'uri') {
					copy[key] = v[key];
				}
			}
			return copy;
		});
	}

	/**
	 * The Array.isArray() method determines whether the passed value is an Array.
	 * @date 2022-08-12
	 * @param {any} value The value to be checked.
	 * @returns {boolean} true if the value is an Array; otherwise, false.
	 */
	public static isArray(value) {
		return Array.isArray(value);
	}
}
