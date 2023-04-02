const l=JSON.parse('{"key":"v-a8916118","path":"/interview/Collection.html","title":"Java集合高频面试题","lang":"zh-CN","frontmatter":{"title":"Java集合高频面试题"},"headers":[{"level":2,"title":"1. 常见的集合有哪些？","slug":"_1-常见的集合有哪些","link":"#_1-常见的集合有哪些","children":[]},{"level":2,"title":"2. 线程安全的集合有哪些？线程不安全的呢？","slug":"_2-线程安全的集合有哪些-线程不安全的呢","link":"#_2-线程安全的集合有哪些-线程不安全的呢","children":[]},{"level":2,"title":"3. ArrayList与 LinkedList 异同点？","slug":"_3-arraylist与-linkedlist-异同点","link":"#_3-arraylist与-linkedlist-异同点","children":[]},{"level":2,"title":"4. ArrayList 与 Vector 区别？","slug":"_4-arraylist-与-vector-区别","link":"#_4-arraylist-与-vector-区别","children":[]},{"level":2,"title":"5. 说一说ArrayList 的扩容机制？","slug":"_5-说一说arraylist-的扩容机制","link":"#_5-说一说arraylist-的扩容机制","children":[]},{"level":2,"title":"6. Array 和 ArrayList 有什么区别？什么时候该应 Array 而不是 ArrayList 呢？","slug":"_6-array-和-arraylist-有什么区别-什么时候该应-array-而不是-arraylist-呢","link":"#_6-array-和-arraylist-有什么区别-什么时候该应-array-而不是-arraylist-呢","children":[]},{"level":2,"title":"7. HashMap的底层数据结构是什么？","slug":"_7-hashmap的底层数据结构是什么","link":"#_7-hashmap的底层数据结构是什么","children":[]},{"level":2,"title":"8. 解决hash冲突的办法有哪些？HashMap用的哪种？","slug":"_8-解决hash冲突的办法有哪些-hashmap用的哪种","link":"#_8-解决hash冲突的办法有哪些-hashmap用的哪种","children":[]},{"level":2,"title":"9. 为什么在解决 hash 冲突的时候，不直接用红黑树？而选择先用链表，再转红黑树?","slug":"_9-为什么在解决-hash-冲突的时候-不直接用红黑树-而选择先用链表-再转红黑树","link":"#_9-为什么在解决-hash-冲突的时候-不直接用红黑树-而选择先用链表-再转红黑树","children":[]},{"level":2,"title":"10. HashMap默认加载因子是多少？为什么是 0.75，不是 0.6 或者 0.8 ？","slug":"_10-hashmap默认加载因子是多少-为什么是-0-75-不是-0-6-或者-0-8","link":"#_10-hashmap默认加载因子是多少-为什么是-0-75-不是-0-6-或者-0-8","children":[]},{"level":2,"title":"11. HashMap 中  key 的存储索引是怎么计算的？","slug":"_11-hashmap-中-key-的存储索引是怎么计算的","link":"#_11-hashmap-中-key-的存储索引是怎么计算的","children":[]},{"level":2,"title":"12. HashMap 的put方法流程？","slug":"_12-hashmap-的put方法流程","link":"#_12-hashmap-的put方法流程","children":[]},{"level":2,"title":"13. HashMap 的扩容方式？","slug":"_13-hashmap-的扩容方式","link":"#_13-hashmap-的扩容方式","children":[]},{"level":2,"title":"14. 一般用什么作为HashMap的key?","slug":"_14-一般用什么作为hashmap的key","link":"#_14-一般用什么作为hashmap的key","children":[]},{"level":2,"title":"15. HashMap为什么线程不安全？","slug":"_15-hashmap为什么线程不安全","link":"#_15-hashmap为什么线程不安全","children":[]},{"level":2,"title":"16. ConcurrentHashMap 的实现原理是什么？","slug":"_16-concurrenthashmap-的实现原理是什么","link":"#_16-concurrenthashmap-的实现原理是什么","children":[]},{"level":2,"title":"17. ConcurrentHashMap  的 put 方法执行逻辑是什么？","slug":"_17-concurrenthashmap-的-put-方法执行逻辑是什么","link":"#_17-concurrenthashmap-的-put-方法执行逻辑是什么","children":[]},{"level":2,"title":"18. ConcurrentHashMap 的 get 方法是否要加锁，为什么？","slug":"_18-concurrenthashmap-的-get-方法是否要加锁-为什么","link":"#_18-concurrenthashmap-的-get-方法是否要加锁-为什么","children":[]},{"level":2,"title":"19. get方法不需要加锁与volatile修饰的哈希桶有关吗？","slug":"_19-get方法不需要加锁与volatile修饰的哈希桶有关吗","link":"#_19-get方法不需要加锁与volatile修饰的哈希桶有关吗","children":[]},{"level":2,"title":"20. ConcurrentHashMap  不支持 key 或者 value 为  null  的原因？","slug":"_20-concurrenthashmap-不支持-key-或者-value-为-null-的原因","link":"#_20-concurrenthashmap-不支持-key-或者-value-为-null-的原因","children":[]},{"level":2,"title":"21. ConcurrentHashMap 的并发度是多少？","slug":"_21-concurrenthashmap-的并发度是多少","link":"#_21-concurrenthashmap-的并发度是多少","children":[]},{"level":2,"title":"22. ConcurrentHashMap 迭代器是强一致性还是弱一致性？","slug":"_22-concurrenthashmap-迭代器是强一致性还是弱一致性","link":"#_22-concurrenthashmap-迭代器是强一致性还是弱一致性","children":[]},{"level":2,"title":"23. JDK1.7与JDK1.8 中ConcurrentHashMap 的区别？","slug":"_23-jdk1-7与jdk1-8-中concurrenthashmap-的区别","link":"#_23-jdk1-7与jdk1-8-中concurrenthashmap-的区别","children":[]},{"level":2,"title":"24. ConcurrentHashMap 和Hashtable的效率哪个更高？为什么？","slug":"_24-concurrenthashmap-和hashtable的效率哪个更高-为什么","link":"#_24-concurrenthashmap-和hashtable的效率哪个更高-为什么","children":[]},{"level":2,"title":"25. 说一下Hashtable的锁机制 ?","slug":"_25-说一下hashtable的锁机制","link":"#_25-说一下hashtable的锁机制","children":[]},{"level":2,"title":"26. 多线程下安全的操作 map还有其他方法吗？","slug":"_26-多线程下安全的操作-map还有其他方法吗","link":"#_26-多线程下安全的操作-map还有其他方法吗","children":[]},{"level":2,"title":"27. HashSet 和 HashMap 区别?","slug":"_27-hashset-和-hashmap-区别","link":"#_27-hashset-和-hashmap-区别","children":[]},{"level":2,"title":"28. Collection框架中实现比较要怎么做？","slug":"_28-collection框架中实现比较要怎么做","link":"#_28-collection框架中实现比较要怎么做","children":[]},{"level":2,"title":"29. Iterator 和 ListIterator 有什么区别？","slug":"_29-iterator-和-listiterator-有什么区别","link":"#_29-iterator-和-listiterator-有什么区别","children":[]},{"level":2,"title":"30. 讲一讲快速失败(fail-fast)和安全失败(fail-safe)","slug":"_30-讲一讲快速失败-fail-fast-和安全失败-fail-safe","link":"#_30-讲一讲快速失败-fail-fast-和安全失败-fail-safe","children":[]},{"level":2,"title":"巨人的肩膀","slug":"巨人的肩膀","link":"#巨人的肩膀","children":[]}],"git":{"updatedTime":1678630251000,"contributors":[{"name":"knightbreeze1","email":"knightbreeze@163.com","commits":1}]},"filePathRelative":"interview/Collection.md"}');export{l as data};
