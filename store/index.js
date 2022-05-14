export const state = () => ({
    listClicked: false,
    menuToggle: false,
});

export const mutations ={
    toggleList(state,value){
        state.listClicked = value;
        
    },
    
    toggleMenu(state, value) {
        console.log(value);
        state.menuToggle = value;
    }
}