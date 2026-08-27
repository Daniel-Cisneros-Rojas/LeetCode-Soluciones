/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultado=0;
    let cabeza=new ListNode;
    let final=cabeza;
    let primer_numero=0;
    let acarreo=0; 
    while(l1!==null||l2!==null){
        let suma=0;
        if (l1!==null){
            suma=suma+l1.val;
        }
        if(l2!=null){
            suma=suma+l2.val;
        }
        
        if((suma+acarreo)>9)
        {
            primer_numero=(suma+acarreo)%10;
            acarreo=1;
            resultado=primer_numero;
            
        
        }else
        {
            resultado=suma+acarreo;
            acarreo=0;
            
            
        }
        final.next = new ListNode(resultado);
        console.log(final)
        final=final.next;
        
        if(l1!=null){
           l1=l1.next;
        }
        
        if(l2!=null){
          l2=l2.next;
        }
        

    }if (acarreo==1){
       final.next = new ListNode(acarreo);
        console.log(final)
        final=final.next; 
    }
    return cabeza.next;
};