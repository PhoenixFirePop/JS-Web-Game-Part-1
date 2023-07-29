
function newImage(source, left, bottom) {
    let image = document.createElement('img');
    image.src = source;
    image.style.position = 'fixed';
    image.style.left = left;
    image.style.bottom = bottom;
    document.body.append(image);
    return image
   }
   newImage('assets/green-character.gif', '100px', '100px');
   newImage('assets/pine-tree.png', '450px', '200px');
   newImage('assets/tree.png', '200px', '300px');
   newImage('assets/pillar.png', '320px', '60px');
   newImage('assets/crate.png', '150px', '200px');
   newImage('assets/well.png', '500px', '425px');


    let greenCharacter = document.createElement('img')
    greenCharacter.src = 'assets/green-character.gif'
    greenCharacter.style.position = 'fixed'
    greenCharacter.style.left = '100px'
    greenCharacter.style.bottom = '100px'
    document.body.append(greenCharacter)

    let pineTree = document.createElement('img')
    pineTree.src = 'assets/pine-tree.png'
    pineTree.style.position = 'fixed'
    pineTree.style.left = '850px'
    pineTree.style.bottom = '200px'
    document.body.append(pineTree)



    function newItem(url, left, bottom) {
     let item = newImage(url, left, bottom)

     item.addEventListener('dblclick', () => {
      item.remove()
     })
    }
    newItem('assets/sword.png', '500px', '405px');
    newItem('assets/sheild.png', '165px', '185px');
    newItem('assets/staff.png', '600px', '100px');




// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

// let tree = document.createElement('img')
// tree.src = 'assets/tree.png'
// tree.style.position = 'fixed'
// tree.style.left = '200px'
// tree.style.bottom = '300px'
// document.body.append(tree)

// let pillar = document.createElement('img')
// pillar.src = 'assets/pillar.png'
// pillar.style.position = 'fixed'
// pillar.style.left = '350px'
// pillar.style.bottom = '100px'
// document.body.append(pillar)

// let crate = document.createElement('img')
// crate.src = 'assets/crate.png'
// crate.style.position = 'fixed'
// crate.style.left = '150px'
// crate.style.bottom = '200px'
// document.body.append(crate)

// let well = document.createElement('img')
// well.src = 'assets/well.png'
// well.style.position = 'fixed'
// well.style.left = '500px'
// well.style.bottom = '425px'
// document.body.append(well)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)

// // sword.addEventListener ('dblclick', function () {
// //     sword.remove ()

// // })

// function newItem(url, left, bottom) {
//     let item = newImage(url, left, bottom)
//     item.addEventListener('click', function () {
//         newitem.remove()
//         let inventoryItem = document.createElement('img')
//         inventoryItem.src = url
//         inventory.append(inventoryItem)
//     })
// }

// let inventory = document.createElement('div')

// function newInventory() {
//     inventory.style.position = 'fixed'
//     inventory.style.bottom = '0px';
//     inventory.style.left = '0px'
//     inventory.style.width = '100%'
//     inventory.style.height = '100px'
//     inventory.style.display = 'flex'
//     inventory.style.flexDirection = 'row'
//     inventory.style.alignItems = 'center'
//     inventory.style.justifyContent = 'space-evenly'
//     inventory.style.border = '2px solid black'
//     inventory.style.backgroundColor = 'brown'
// //     document.body.append(inventory)
// }

// newInventory()