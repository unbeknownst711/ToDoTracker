//======    Config  =============
const DEBUG_INFO = 1.0

//Item -> [ id: int , name: str, state: bool ]




//======    Var     =============
var ItemArr = [] //should be sorted by id
var SortedItemArr = [] //sorted by name for simplicity, only save references to ItemArr index

let index = 0



//======    Init    =============
function Init(){

}


//======    Item Management     ========
function addItem(id = -1, name = "", state = false){
    if(id == -1) return;
    if(name == "") return;

    let newItemIndex = ItemArr[ItemArr.findLastIndex()][0] + 1 || 0;
    if(id != -1) newItemIndex = id;

    ItemArr.push([ newItemIndex, name, state ]);


}

function sortItem(){ //only call when needed
    SortedItemArr = ItemArr.map((_, i) => i).sort((i, j) => ItemArr[i][1].localeCompare(ItemArr[j][1]));


}




//======    Debug   ==============
console.log("Debug Ver: " + DEBUG_INFO)

//temp fill
ItemArr = [
    [0, "aaaaa", false],
    [1, "ccccc", false],
    [2, "bbbbb", false],
    [3, "Ba", false]
]
sortItem();
console.log(SortedItemArr);



/* categories var example

var ItemArr = [ {1, a, false}, {2...}, {3...}, {4,...}, {5,...}, {6,...}, {7,...} ]
var categories_name = [a , b , c , d]
var categories = [
[3, 1, 2, 4,],
[5, 2],
[5, 2],
[7]
]

--> item can be in multiple category or no category at all. category itself doesnt have limitation
--> however item in category must exist in itemarr. categories only store itemarr index

*/