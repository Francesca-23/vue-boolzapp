const { createApp } = Vue

createApp({
  data() {
    return {
        
        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './assets/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './assets/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './assets/img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './assets/img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './assets/img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './assets/img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],

        activeAvatar: 0,
        activeName: 0,
        activeMessage: 0,
        testoInserito: '',

        searchPerson: '',

        data: new Date(),

    }
    
  },


  methods: {

    active(i){
        this.activeAvatar = this.contacts[i].avatar
        this.activeName = this.contacts[i].name
        this.activeMessage = this.contacts[i].messages
    },

    //funzione per inviare un nuovo messaggio
    newMessage(){
        
        if(this.activeMessage != 0){

            this.activeMessage.push(
               {
                date: this.generatoreDate(),
                message: this.testoInserito,
                status: 'sent'
               })
    
            this.testoInserito = ''
    
            setTimeout(() => {
                this.activeMessage.push(
                    {
                    date: this.generatoreDate(),
                    message: 'ok',
                    status: 'received'
                    })
            }, 1000)

        }else{
            
            this.contacts[0].messages.push(
                {
                 date: this.generatoreDate(),
                 message: this.testoInserito,
                 status: 'sent'
                })
     
             this.testoInserito = ''
     
             setTimeout(() => {
                 this.contacts[0].messages.push(
                     {
                     date: this.generatoreDate(),
                     message: 'ok',
                     status: 'received'
                     })
             }, 1000)
        }


    },

    generatoreDate(){
        return `${this.data.getDay()}:${this.data.getMonth()}:${this.data.getFullYear()} ${this.data.getHours()}:${this.data.getMinutes()}:${this.data.getSeconds()}`
    },

    //selezione dell'orario per i messaggi della prima chat
    orarioFisso(i){
        let time = this.contacts[0].messages[i].date.split(' ')
        return time[1]
    },

    //selezione dell'orario per i messaggi
    orarioMess(i){
        let time = this.activeMessage[i].date.split(' ')
        return time[1]
    },

    //funzione per selezionare i contatti dal nome
    selectPerson(){ 

        this.contacts.forEach((element) => {
                
            if(element.name.includes(this.searchPerson.toUpperCase()) || element.name.includes(this.searchPerson)){
                return element.visible = true
            }else{
                return element.visible = false
            }
        })     
    },

    //eliminazione messaggio al click
    eliminaMessaggio(i){
        if(this.activeMessage != 0){
            this.activeMessage.splice(i, 1)
        }else{
            this.contacts[0].messages.splice(i, 1)
        }
    },

    //funzione per tener traccia dell'ultimo messaggio
    ultimoMessaggio(i){
        let last = this.contacts[i].messages.slice(-1).pop().message
        return last
        
    },

    //funzione per tener traccia dell'orario dell'ultimo messaggio
    ultimoOrario(i){
        let last = this.contacts[i].messages.slice(-1).pop().date

        let orario = last.split(' ')
        return orario[1]
    }

  }
}).mount('#app')