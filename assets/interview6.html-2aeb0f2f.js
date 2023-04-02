import{_ as i,p as a,q as e,a1 as n}from"./framework-5866ffd3.js";const l={},s=n(`<h2 id="_1-如何定位及优化sql语句的性能问题" tabindex="-1"><a class="header-anchor" href="#_1-如何定位及优化sql语句的性能问题" aria-hidden="true">#</a> 1. 如何定位及优化SQL语句的性能问题？</h2><p>对于低性能的SQL语句的定位，最重要也是最有效的方法就是使用执行计划，MySQL提供了explain命令来查看语句的执行计划。</p><p><strong>大表数据查询的优化</strong></p><ul><li>优化shema、sql语句+索引；</li><li>第二加缓存，memcached, redis；</li><li>主从复制，读写分离；</li><li>通过分库分表的方式进行优化，主要有垂直分表和水平分表</li></ul><p><strong>优化查询过程中的数据访问</strong></p><ul><li>访问数据太多导致查询性能下降</li><li>确认MySQL服务器是否在分析大量不必要的数据行</li><li>查询不需要的数据。解决办法：使用limit解决</li><li>多表关联返回全部列。解决办法：指定列名</li><li>总是返回全部列。解决办法：避免使用SELECT *</li><li>重复查询相同的数据。解决办法：可以缓存数据，下次直接读取缓存</li><li>改变数据库和表的结构，修改数据表范式</li><li>重写SQL语句，让优化器可以以更优的方式执行查询。</li></ul><p><strong>优化关联查询</strong></p><ul><li>确定ON或者USING子句中是否有索引。</li><li>确保GROUP BY和ORDER BY只有一个表中的列，这样MySQL才有可能使用索引。</li></ul><p><strong>数据库结构优化</strong> 一个好的数据库设计方案对于数据库的性能往往会起到事半功倍的效果。</p><p>需要考虑数据冗余、查询和更新的速度、字段的数据类型是否合理等多方面的内容。</p><ol><li>将字段很多的表分解成多个表</li><li>增加中间表</li><li>增加冗余字段</li></ol><h2 id="_2-mysql中myisam与innodb的区别" tabindex="-1"><a class="header-anchor" href="#_2-mysql中myisam与innodb的区别" aria-hidden="true">#</a> 2. MySQL中myisam与innodb的区别?</h2><ul><li>InnoDB支持事物，而MyISAM不支持事物</li><li>InnoDB支持行级锁，而MyISAM支持表级锁</li><li>InnoDB支持MVCC, 而MyISAM不支持</li><li>InnoDB支持外键，而MyISAM不支持</li><li>InnoDB不支持全文索引，而MyISAM支持。</li></ul><h2 id="_3-事务的特性" tabindex="-1"><a class="header-anchor" href="#_3-事务的特性" aria-hidden="true">#</a> 3. 事务的特性</h2><ul><li>原子性：</li><li>一致性：</li><li>隔离性：</li><li>持久性：</li></ul><h2 id="_4-索引是什么" tabindex="-1"><a class="header-anchor" href="#_4-索引是什么" aria-hidden="true">#</a> 4. 索引是什么？</h2><p>索引是表的目录，在查找内容之前可以先在目录中查找索引位置，以此快速定位查询数据。对于索引，会保存在额外的文件中。</p><p>索引是帮助MySQL高效获取数据的数据结构。</p><h2 id="_5-索引能干什么-有什么好处" tabindex="-1"><a class="header-anchor" href="#_5-索引能干什么-有什么好处" aria-hidden="true">#</a> 5. 索引能干什么?有什么好处？</h2><p>当表中的数据量越来越大时，索引对于性能的影响愈发重要。索引能够轻易将查询性能提高好几个数量级，总的来说就是可以明显的提高查询效率。</p><h2 id="_6-索引的种类有哪些" tabindex="-1"><a class="header-anchor" href="#_6-索引的种类有哪些" aria-hidden="true">#</a> 6. 索引的种类有哪些？</h2><p>1、从存储结构上来划分：BTree索引（B-Tree或B+Tree索引），Hash索引，full-index全文索引，R-Tree索引。这里所描述的是索引存储时保存的形式， 2、从应用层次来分：普通索引，唯一索引，复合索引 3、根据中数据的物理顺序与键值的逻辑（索引）顺序关系：聚集索引，非聚集索引。</p><p>平时讲的索引类型一般是指在应用层次的划分。</p><ul><li>普通索引</li><li>复合索引</li><li>唯一索引</li></ul><h2 id="_7-为什么-mysql-的索引要使用-b-树" tabindex="-1"><a class="header-anchor" href="#_7-为什么-mysql-的索引要使用-b-树" aria-hidden="true">#</a> 7. 为什么 MySQL 的索引要使用 B+树</h2><p>B-tree：因为B树不管叶子节点还是非叶子节点，都会保存数据，这样导致在非叶子节点中能保存的指针数量变少（有些资料也称为扇出），指针少的情况下要保存大量数据，只能增加树的高度，导致IO操作变多，查询性能变低；</p><p>Hash：虽然可以快速定位，但是没有顺序，IO复杂度高。</p><p>二叉树：树的高度不均匀，不能自平衡，查找效率跟数据有关（树的高度），并且IO代价高。</p><p>红黑树：树的高度随着数据量增加而增加，IO代价高。</p><h2 id="_8-哪些列上适合创建索引-创建索引有哪些开销" tabindex="-1"><a class="header-anchor" href="#_8-哪些列上适合创建索引-创建索引有哪些开销" aria-hidden="true">#</a> 8. 哪些列上适合创建索引？创建索引有哪些开销？</h2><p>经常需要作为条件查询的列上适合创建索引，并且该列上也必须有一定的区分度。创建索引需要维护，在插入数据的时候会重新维护各个索引树（数据页的分裂与合并），对性能造成影响</p><h2 id="_9-索引这么多优点-为什么不对表中的每一个列创建一个索引呢" tabindex="-1"><a class="header-anchor" href="#_9-索引这么多优点-为什么不对表中的每一个列创建一个索引呢" aria-hidden="true">#</a> 9. 索引这么多优点，为什么不对表中的每一个列创建一个索引呢？</h2><ol><li>当对表中的数据进行增加、删除和修改的时候，索引也要动态的维护，这样就降低了数据的维护速度。</li><li>索引需要占物理空间，除了数据表占数据空间之外，每一个索引还要占一定的物理空间，如果要建立聚簇索引，那么需要的空间就会更大。</li><li>创建索引和维护索引要耗费时间，这种时间随着数据量的增加而增加。</li></ol><h2 id="_10-什么情况下不走索引-索引失效" tabindex="-1"><a class="header-anchor" href="#_10-什么情况下不走索引-索引失效" aria-hidden="true">#</a> 10. 什么情况下不走索引（索引失效）？</h2><p>1、使用!= 或者 &lt;&gt; 导致索引失效</p><p>2、类型不一致导致的索引失效</p><p>3、函数导致的索引失效</p><p>4、运算符导致的索引失效</p><p>5、OR引起的索引失效</p><p>6、模糊搜索导致的索引失效</p><p>7、NOT IN、NOT EXISTS导致索引失效</p><h2 id="_11-mysql建表的约束条件有哪些" tabindex="-1"><a class="header-anchor" href="#_11-mysql建表的约束条件有哪些" aria-hidden="true">#</a> 11. MySQL建表的约束条件有哪些？</h2><ul><li>主键约束（Primay Key Coustraint） 唯一性，非空性</li><li>唯一约束 （Unique Counstraint）唯一性，可以空，但只能有一个</li><li>检查约束 (Check Counstraint) 对该列数据的范围、格式的限制</li><li>默认约束 (Default Counstraint) 该数据的默认值</li><li>外键约束 (Foreign Key Counstraint) 需要建立两表间的关系并引用主表的列</li></ul><h2 id="_12-什么是最左匹配原则" tabindex="-1"><a class="header-anchor" href="#_12-什么是最左匹配原则" aria-hidden="true">#</a> 12. 什么是最左匹配原则？</h2><p>最左优先，以最左边的为起点任何连续的索引都能匹配上。同时遇到范围查询(&gt;、&lt;、between、like)就会停止匹配。</p><p><strong>最左匹配原则的原理</strong></p><p>MySQL中的索引可以以一定顺序引用多列，这种索引叫作联合索引.最左匹配原则都是针对联合索引来说的</p><p>优点：最左前缀原则的利用也可以显著提高查询效率，是常见的MySQL性能优化手段。</p><p>题目：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、怎么进行SQL优化？
<span class="token number">2</span>. MySQL中myisam与innodb的区别？
<span class="token number">3</span>. 事务的特性？
<span class="token number">4</span>. 索引是什么？
<span class="token number">5</span>. 索引能干什么?有什么好处？
<span class="token number">6</span>. 索引的种类有哪些？
<span class="token number">7</span>. 为什么 MySQL 的索引要使用 B+树
<span class="token number">8</span>. 哪些列上适合创建索引？创建索引有哪些开销？
<span class="token number">9</span>. 索引这么多优点，为什么不对表中的每一个列创建一个索引呢？
<span class="token number">10</span>、什么情况下不走索引（索引失效）？
<span class="token number">11</span>. MySQL建表的约束条件有哪些？
<span class="token number">12</span>. 什么是最左匹配原则？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,50),r=[s];function d(t,p){return a(),e("div",null,r)}const c=i(l,[["render",d],["__file","interview6.html.vue"]]);export{c as default};
