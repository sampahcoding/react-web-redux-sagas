export function clean(params = []) {
	Object.keys(params).map(function (key) {
		let p = params[key];
		if (p === "") {
			return delete params[key];
		}
		return params;
	});

	return params;
}

export function restoreInit (initial, params= []) {
	Object.keys(initial).map(function (key) {
		let name = initial[key];
		if (params[name] === undefined) {
			return params[name] = "";
		}
		return params;
	});

	return params;
}

export function restoreUrl (initial, params= []) {
	Object.keys(initial).map(function (key) {
		let p = params.get(key);
		return initial[key] = p ? p : "";
	});

	return initial;
}
