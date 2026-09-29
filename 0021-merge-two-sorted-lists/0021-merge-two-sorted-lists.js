/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy= new ListNode;
    let posicion=dummy;

   //mientras no este vacia ninguna lista
    while(list1!=null&&list2!=null)
    {
        if(list1.val<=list2.val)
        {
            //se apunta al nodo menor
            posicion.next=list1;
            //se avanza la lista correspondiente a su siguiente posicion
            list1=list1.next;
        }else
        {
            posicion.next=list2;
            list2=list2.next;
        }
        //ya que se tiene el valor guardado se avanza a la siguiente
        posicion=posicion.next;
    }
    posicion.next=list1!=null? list1:list2;
    console.log(dummy.next);
    return dummy.next;
};