const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes : [],

			planets : [],

			favoritos: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://swapi.dev/api/people")
				.then(resp=> resp.json())
				.then(data=>{
					console.log(data);
					setStore({personajes: data})
					//setStore es una función que modifica store, un elemento del objeto y tengo que indicar cual
				})
				.catch(error=>console.log(error))

				fetch("https://swapi.dev/api/planets")
				.then(resp=> resp.json())
				.then(data=>{
					console.log(data);
					setStore({planets: data})
					//setStore es una función que modifica store, un elemento del objeto y tengo que indicar cual
				})
				.catch(error=>console.log(error))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			
			setFavoritos: favoritos => {
				setStore({ favoritos: favoritos });
			},
			
			eliminarFavorito: favorito => {
				const store = getStore();
				const nuevosFavoritos = store.favoritos.filter(f => f !== favorito);
				setStore({ favoritos: nuevosFavoritos });
			}
		}
	};
};

export default getState;
