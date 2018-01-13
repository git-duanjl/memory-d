** ensureIndex **

	// 创建索引 Options  1 升序 -1 降序
	db.COLLECTION_NAME.ensureIndex(keys[,options])

	// 重建索引
	db.COLLECTION_NAME.reIndex()

	// 查看索引
	db.COLLECTION_NAME.getIndexes()

	// 查看集合索引大小
	db.COLLECTION_NAME.totalIndexSize()

	// 查看数据库中所有索引
	db.system.indexes.find()

	// 删除索引
	db.COLLECTION_NAME.dropIndex("INDEX-NAME")

	// 删除所有索引
	db.COLLECTION_NAME.dropIndex()

** Modify the type **

	db.集合.find({"列":{$type:2}}).forEach(function(x){ x.列=parseFloat(x.列);db.order.save(x) })
	db.order.find({"saleprice":{$type:2}}).forEach(function(x){x.saleprice=parseFloat(x.saleprice);db.order.save(x)})

	tables
	类型	             对应数字	     别名	       说明
	Double	                1	   		double	 
	String	                2	   		string	 
	Object	                3	   		object	 
	Array	                4	   		array	 
	Binary data	            5	   		binData	 
	Undefined	            6	   		undefined	    弃用
	ObjectId	            7	   		objectId	 
	Boolean	                8	    	“bool”	 
	Date	                9	   		 “date”	 
	Null	                10	    	 “null”	 
	Regular Expression	    11	         “regex”	 
	DBPointer	            12	        “dbPointer”	 
	JavaScript	            13	        “javascript”	 
	Symbol	                14			“symbol”	 
	JavaScript(with scope)	15			“javascriptWithScope”	 
	32-bit integer	        16			“int”	 
	Timestamp	            17			“timestamp”	 
	64-bit integer	        18			“long”	 
	Min key	                -1			“minKey”	 
	Max key	                127			“maxKey”	 

