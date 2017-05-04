$(function(){
  const $form =  $('form#create-animal')
  const $list =  $('ul#animals')
  new AnimalController($list, $form)
})
