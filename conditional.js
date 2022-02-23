Vue.createApp({
    data(){
        return{
            mesCourses : [],
            newProduit : '',
            masquerListe: true
        }
    },
    methods : {
        addProduit(){
            this.mesCourses.push(this.newProduit);
        }, supprimerProduit(unIndex){
            this.mesCourses.splice(unIndex, 1);
        }, afficher(){
            this.masquerListe = !this.masquerListe;
        } 
        
    }, computed: {
        messageButton(){
            if(this.masquerListe == true){
                return 'Masquer Liste'
            } else{
                return 'Afisher Liste'
            }
        }
    }
}).mount('#monApp');