Duration = "P" years:Y? months:M? weeks:W? days:D? time:T? {
	if (!years && !months && !weeks && !days && !time) {
    	throw new Error("Invalid format");
    }
    
	return {
    years,
    months,
    weeks,
    days,
    hours: null,
    minutes: null,
    seconds: null,
    ...time
    };
}

T = "T" hours:H? minutes:M? seconds:S? {
	if (!hours && !minutes && !seconds) {
    	throw new Error("Invalid format");
    }
    
	return { hours, minutes, seconds };
}

Y = y:Q "Y" { return y; }
M = m:Q "M" { return m; }
W = w:Q "W" { return w; }
D = d:Q "D" { return d; }
H = h:Q "H" { return h; }
S = s:Q "S" { return s; }

Q = n:$([0-9]+ ("." [0-9]+)? / "") {
	return parseFloat(n) || 1;
}