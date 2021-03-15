/*************************************************************************
	> File Name: queue.cpp
	> Author: huguang
	> Mail: hug@haizeix.com
	> Created Time: 
 ************************************************************************/

#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <queue>
#include <stack>
#include <algorithm>
#include <string>
#include <map>
#include <set>
#include <vector>
using namespace std;

class Queue {
public :
    Queue(int n = 10) : arr(n), head(0), tail(0), cnt(0) {}
    void push(int x) {
        if (full()) {
            cout << "queue full" << endl;
            return ;
        }
        arr[tail] = x;
        tail += 1;
        cnt += 1;
        if (tail == arr.size()) tail = 0;
        return ;
    } // 入队
    void pop(){
        if (empty()) return ;
        head += 1;
        cnt -= 1;
        if (head == arr.size()) head  = 0;
        return ;
    } // 出队
    bool empty() {
        return cnt == 0;
    } // 判空
    bool full() {
        return cnt == arr.size();
    }
    int front() {
        if (empty()) return 0;
        return arr[head];
    } // 查看队首元素
    int size() {
        return cnt;
    }
    void output() {
        cout << "Queue : ";
        for (int i = 0, j = head; i < cnt; i++) {
            cout << arr[j] << " ";
            j += 1;
            if (j == arr.size()) j = 0;
        }
        cout << endl;
        return ;
    }
    void clear() {
        head = tail = cnt = 0;
        return ;
    }

private:
    int head, tail;
    int cnt;
    vector<int> arr;
};

int main() {
    string op;
    int value;
    Queue q(5);
    while (cin >> op) {
        if (op == "insert") {
            cin >> value;
            q.push(value);
        } else if (op == "front") {
            cout << "front element : " << q.front() << endl;
        } else if (op == "pop") {
            q.pop();
        } else if (op == "size") {
            cout << "queue size : " << q.size() << endl;
        }
        q.output();
    }
    return 0;
}
