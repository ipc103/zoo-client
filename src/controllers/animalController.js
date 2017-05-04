class AnimalController {
  constructor($list, $form){
    this.$list = $list
    this.$form = $form
    this.$animalNameInput = $('input#animal-name')
    this.$speciesNameInput = $('input#species-name')
    this.view = new AnimalList()
    this.fetchAndRenderAnimals()
    this.addListeners()
  }

  fetchAndRenderAnimals(){
    Animal.all()
      .then(animals => {
        this.animals = animals
        this.$list.html( this.view.render(this.animals) )
      })
  }

  addListeners(){
    this.$form.on('submit', e => {
      e.preventDefault()
      this.createAndRenderAnimal()
    })
  }


  createAndRenderAnimal(){
    const animalName =  this.$animalNameInput.val()
    const speciesName = this.$speciesNameInput.val()
    this.$animalNameInput.val('')
    this.$speciesNameInput.val('')

    this.createAnimal({animal_name: animalName, species_name: speciesName})
      .then( animal => {
        this.animals.push(animal)
        this.$list.html( this.view.render(this.animals) )
    })
  }

  createAnimal(params){
    return Animal.create(params)
  }
}
