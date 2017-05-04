class AnimalList {

  render(animals){
    const listElements = animals.map(function(animal){
      return `<li>${animal.name}</li>`
    })

    return listElements.join('')
  }
}
