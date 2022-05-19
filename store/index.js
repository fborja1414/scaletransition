export const state = () => ({
    listClicked: false,
    menuToggle: false,
    aboveBool: false,
    belowBool: false,
    pageTitle: String,
});

export const mutations ={
    toggleList(state,value){
        state.listClicked = value;
        
    },
    
    toggleMenu(state, value) {
        console.log(value);
        state.menuToggle = value;
    },

    toggleAbove(state, value){
        state.aboveBool = value;
    },
    toggleBelow(state, value){
        state.belowBool = value;
    },
    updateCurrentPage(state, value){
        console.log(value);
        state.pageTitle = value;
    },

}