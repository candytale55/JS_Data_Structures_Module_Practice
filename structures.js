
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
    this.previous = null;
  }

  setNextNode(node){
    if (node instanceof Node || node === null){
      this.next = node;
    }
    else {
      throw new Error('El siguiente nodo debe pertenecer a la clase Node')
    }
  }

  setPreviousNode(node){
    if (node instanceof Node || node === null){
      this.previous = node;
    } 
    else {
      throw new Error('El nodo anterior debe pertenecer a la clase Node')
    }
  }

  getNextNode(){
    return this.next;
  }

  getPreviousNode(){
    return this.previous;
  }
} // Fin Node



const nodoHeladoFresa = new Node ('Fresalicioso');
const nodoHeladoVainilla = new Node ('Vanillaciente');
const nodoHeladoCoco = new Node ('Cocotero')

nodoHeladoFresa.setNextNode(nodoHeladoVainilla)
nodoHeladoVainilla.setNextNode(nodoHeladoCoco);
nodoHeladoVainilla.setPreviousNode(nodoHeladoFresa);
nodoHeladoCoco.setPreviousNode(nodoHeladoVainilla)


let currentNode = nodoHeladoFresa;


function printNodes(starting_node, direction){
  currentNode = starting_node
  if (direction === "prev"){
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.getPreviousNode();
    }        
  }
  else {
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.getNextNode();
    }
  }
}

// printNodes(nodoHeladoVainilla)




class SingleLinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data){
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    }
    else {
      while (tail.getNextNode() !== null){
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead(){
    const removedHead = this.head;
    if (!removedHead){
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }


  printList(){
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null){
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += "<tail>"
    console.log(output);
  }

} // class SingleLinkedList


const months = new SingleLinkedList();

months.addToTail('November');
//months.printList(); 
//<head> November <tail>

months.addToTail('December');
//months.printList();
// <head> November December <tail>

months.addToHead('October');
months.addToHead('September');
months.addToHead('August');
//months.printList();
// <head> August September October November December <tail>

months.addToHead('July');
months.addToHead('June');
months.addToHead('May');
months.addToHead('April');
months.addToHead('March');
months.addToHead('January');
months.addToHead('February');
//months.printList();
//<head> February January March April May June July August September October November December <tail>

months.removeHead();
months.removeHead();
//months.printList();
// <head> March April May June July August September October November December <tail>


months.addToHead('February');
months.addToHead('January');
months.printList();
// <head> January February March April May June July August September October November December <tail>




class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(data){
    const newHead = new Node(data);
    const currentHead = this.head;

    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  } //addToHead

  addToTail(data){
    const newTail = new Node(data);
    const currentTail = this.tail;

    if (currentTail){
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head){
      this.head = newTail;
    }
  } //addToTail

  removeHead(){
    const removedHead = this.head;
    if(!removedHead){
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head){
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail){
      this.removeTail();
    }
    return removedHead.data;
  } // removeHead

  removeTail(){
    const removedTail = this.tail;
    if (!removedTail){
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail){
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head){
      this.removeHead();
    }
    return removedTail.data;
  } // removeTail

  removedByData(data){
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null){
      if (currentNode.data === data){
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove){
      return null;
    }
    if (nodeToRemove === this.tail){
      this.removeTail();
    } 
    else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  } // removedByData

  printList() {
    let currentNode = this.head;
    let output = '<inicio> '
    while (currentNode !== null) {
      output += currentNode.data + '   ';
      currentNode = currentNode.getNextNode();
    }
    output += '<fin>'
    console.log(output);
  }
} // DoublyLinkedList


const linea3 = new DoublyLinkedList() 

linea3.addToHead("Rafelbunyol")
linea3.addToHead("La Pobla de Farnals")
linea3.addToHead("Massamagrell")
linea3.addToHead("Museros")
linea3.addToHead("Albalat dels Sorells")
linea3.addToHead("Foios")
linea3.addToHead("Meliana")
linea3.addToHead("Almàssera")
linea3.addToHead("Alboraya-Peris Aragó")
linea3.addToHead("Alboraya-Palmaret")
linea3.addToHead("Machado")
linea3.addToHead("Benimaclet")
linea3.addToHead("Facultats")
linea3.addToHead("Alameda")
linea3.addToHead("Colón")
linea3.addToHead("Xàtiva")
linea3.addToHead("À. Guimerà")
linea3.addToHead("Av. del Cid")
linea3.addToHead("Nou d'Octubre")
linea3.addToHead("Mislata")
linea3.addToHead("Mislata-Almassil")
linea3.addToHead("Faitanar")
linea3.addToHead("Quart de Poblet")
linea3.addToHead("Salt de l'Aigua")
linea3.addToHead("Manises")
linea3.addToHead("Rosas")
linea3.addToHead("Aeroport")



const metroVal03 = linea3
metroVal03.printList()





const ruta160 = new DoublyLinkedList();
ruta160.addToTail("Ricardo Micó");
ruta160.addToTail("Quart");
ruta160.addToTail("Àngel Guimerá");
ruta160.addToTail("Linares");
ruta160.addToTail("Cid - Burgos");
ruta160.addToTail("Cid - Passatge Vidal");
ruta160.addToTail("Hospital General");
ruta160.addToTail("Barrio De La Luz");
ruta160.addToTail("Camí Nou 20");
ruta160.addToTail("Camí Nou 62");
ruta160.addToTail("Camí Nou 96");
ruta160.addToTail("Camí Nou 156");
ruta160.addToTail("Camí Nou - San Ramón");
ruta160.addToTail("Avinguda Dels Tarongers - Polígono");
ruta160.addToTail("Carretera Aldaia-Xirivella - Polígono");
ruta160.addToTail("Blasco Ibáñez 23");
ruta160.addToTail("Coladors 23");
ruta160.addToTail("Coladors 57");
ruta160.addToTail("Carrer Solidaritat 3");
ruta160.addToTail("Santísimo Cristo 67");
ruta160.addToTail("Juan Ramón Jiménez - Centro Social");
ruta160.addToTail("Juan Ramón Jiménez - Cementerio");
ruta160.addToTail("Ovidi Montllor 54");
ruta160.addToTail("Acceso Bonaire");
ruta160.addToTail("Pueblo Bonaire");
ruta160.addToTail("C.C Bonaire I");

console.log(" ")

ruta160.printList();



// https://www.metrovalencia.es/descargas/pdf/PlanoRed_Metrovalencia_Julio2016.pdf
// https://moovitapp.com/index/es/transporte_p%C3%BAblico-line-160-Valencia-1669-775039-219586-0