export const sparqlEndpoint = async (query: string, sparqlEndpointUrl = 'https://data-iremus.huma-num.fr/sparql') => {
  let res = await fetch(sparqlEndpointUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
    mode: "cors",
    cache: "no-cache",
    redirect: "follow",
    body: `query=${encodeURIComponent(query)}`,
  });
  res = await res.json();
  return res;
};

export function bind(query: string, parameters: Array<string>) {
  for (const p in parameters) {
    query = query.replaceAll("${" + p + "}", parameters[p]);
  }
  return query;
}

// export const rekeyBindings = (bindings, keys = {}) => {
//   return bindings.map((binding) => {
//     const rekeyedBinding = {};
//     for (const k in binding) {
//       let v = binding[k].value;
//       if (binding[k].datatype === "http://www.w3.org/2001/XMLSchema#integer")
//         v = parseInt(v);
//       rekeyedBinding[keys[k] || k] = v;
//     }
//     return rekeyedBinding;
//   });
// };