/*
Add Two Numbers (#2)

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// NOT My solution but explained
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
};

var addTwoNumbers = function (l1, l2) {
    var resultList = new ListNode(0); // Создаем новый односвязный список, путем создания первого узла в нем.
    var currentNode = resultList; // Устанавливаем первый узел в качестве головного узла нашего односвязного списка.
    var currentSum = 0; // Переменная для отслеживания суммы в разрядах.
    var currentCarry = 0; // Переменная для переноса десятка в следующий разряд.

    /*Запускаем цикл while. В ходе этого цикла через переменные "l1" и "l2" мы будем обращаться не к целым спискам, а перемещаться по нодам 
    этих списков. Поэтому наш цикл while будет работать пока у нас есть непустые узлы хотя бы в одном списке или у нас есть еще неприбавленный 
    десяток.*/
    while (l1 !== null || l2 !== null || currentSum > 0) {
        if (l1 !== null) { // Если взятый узел из первого списка не пустой, то
            currentSum = currentSum + l1.val; // добавляем значение этого узла к текущей сумме и
            l1 = l1.next; // берем следующий узел в первом списке.
        };

        if (l2 !== null) { // Если взятый узел из второго списка не пустой, то
            currentSum = currentSum + l2.val; // добавляем значение этого узла к текущей сумме и
            l2 = l2.next; // берем следующий узел во втором списке.
        };

        if (currentSum >= 10) { // Если текущая сумма оказалась равно 10 или больше, значит мы должны перенести десяток в следующий разряд:
            currentCarry = 1; // устанавливаем, что у нас есть один десяток для переноса в следующий разряд и
            currentSum = currentSum - 10; // вычитаем этот десяток из текущей суммы.
        };

        /*Обращаясь к текущему узлу нашего финального списка, создаем следующий узел со значением равным текущей сумме.*/
        currentNode.next = new ListNode(currentSum);
        currentNode = currentNode.next; // Устанавливаем только что созданный узел в качестве текущего, чтобы использовать его в следующем цикле.

        /*Подготавливаем текущую сумму для работы с ней в следующем разряде, путем добавления десятка, полученного из текущего разряда, если
        таковой десяток был получен.*/
        currentSum = currentCarry;
        currentCarry = 0; // Сбрасываем переменную для переноса десятка в следующий разряд, чтобы с ней можно было работать в следующем цикле.
    };

    /*Возвращаем второй узел финального списка, так как первый узел всегда хранит значение 0, а само число начинается уже со второго узла.*/
    return resultList.next;
};

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

// Not my solution but works faster

// var addTwoNumbers = function (l1, l2) {
//     const dummy = new ListNode();
//     let curr = dummy;
//     let carry = 0;

//     while (l1 !== null || l2 !== null || carry !== 0) {
//         const v1 = l1 === null ? 0 : l1.val;
//         const v2 = l2 === null ? 0 : l2.val;

//         const sum = v1 + v2 + carry;
//         carry = Math.trunc(sum / 10);
//         curr.next = new ListNode(sum % 10);

//         curr = curr.next;
//         l1 = l1 === null ? null : l1.next;
//         l2 = l2 === null ? null : l2.next;
//     };

//     return dummy.next;
// };

// Not my solution but uses less memory

// var addTwoNumbers = function (l1, l2) {
//     let dummyHead = new ListNode(0);
//     let curr = dummyHead;
//     let carry = 0;

//     while (l1 !== null || l2 !== null || carry !== 0) {
//         let x = l1 !== null ? l1.val : 0;
//         let y = l2 !== null ? l2.val : 0;
        
//         let sum = carry + x + y;
//         carry = Math.floor(sum / 10);
//         curr.next = new ListNode(sum % 10);

//         curr = curr.next;
//         if (l1 !== null) { l1 = l1.next };
//         if (l2 !== null) { l2 = l2.next };
//     };

//     return dummyHead.next;
// };

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

let list1Node3 = new ListNode(3, null);
let list1Node2 = new ListNode(4, list1Node3);
let list1Node1 = new ListNode(2, list1Node2);

let list2Node3 = new ListNode(4, null);
let list2Node2 = new ListNode(6, list2Node3);
let list2Node1 = new ListNode(5, list2Node2);

console.log(addTwoNumbers(list1Node1, list2Node1)); // 342 + 465 = 807


// let list3Node1 = new ListNode(0, null);
// let list4Node1 = new ListNode(0, null);

// console.log(addTwoNumbers(list3Node1, list4Node1)); // 0 + 0 = 0

// let list5Node7 = new ListNode(9, null);
// let list5Node6 = new ListNode(9, list5Node7);
// let list5Node5 = new ListNode(9, list5Node6);

// let list5Node4 = new ListNode(9, list5Node5);
// let list5Node3 = new ListNode(9, list5Node4);
// let list5Node2 = new ListNode(9, list5Node3);

// let list5Node1 = new ListNode(9, list5Node2);

// let list6Node4 = new ListNode(9, null);
// let list6Node3 = new ListNode(9, list6Node4);
// let list6Node2 = new ListNode(9, list6Node3);
// let list6Node1 = new ListNode(9, list6Node2);

// console.log(addTwoNumbers(list5Node1, list6Node1)); // 9_999_999 + 9_999 = 10_009_998