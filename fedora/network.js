1.简介：
	计算机网络的核心，网络协议的学习。
	全中国的地方语言，以普通话为语言标准。
	例如 ： 山东话 vs 河南话 两个地方的人根本没法沟通，这个时候 普通话就成为了标准国通方式。

	计算机网络协议也是一样，多种多样。
	而ARPA公司与1977年到1979年推出了一种名为ARPANET的网络协议受到了广泛的热捧，其中最主要的原因就是它推出了人尽皆知的TCP/IP标准网络协议。
	目前TCP/IP协议已经成为Internet中的“通用语言”。

2. 网络层次划分。
	为了使不同计算机厂家生产的计算机能够相互通信，以便在更大的范围内建立计算机网络，
	国际标准化组织（ISO）在1978年提出了“开放系统互联参考模型”，
	即著名的OSI/RM模型（Open System Interconnection/Reference Model）。

	它将计算机网络体系结构的通信协议划分为七层，自下而上依次为：

	物理层（Physics Layer）
		简单的说，物理层确保原始的数据可在各种物理媒体上传输。
		物理层记住两个重要的设备名称，中继器（Repeater，也叫放大器）和集线器。

	数据链路层（Data Link Layer）
	网络层（Network Layer）

	传输层（Transport Layer）
		TCP/IP
			IP ：计算机之间的通信。
			TCP ：
				建立链接 ：
					客户端  → 发送报文请求建立链接 →  服务端
					客户端  ←   发送ACK 分配资源   ←  服务端
					客户端  →   发送ACK 分配资源   →  服务端
					√

				断开链接
					客户端  		  →   FIN 终断请求 →  服务端
					客户端(FIN_WAIT)  ← 	  ACK      ←  服务端
					客户端(FIN_WAIT)  ← 	  FIN      ←  服务端
					客户端(FIN_WAIT)  →       ACK      →  服务端
						    ↓                               ↓
				  	 (2MSL)关闭                            关闭
				  	 √

	会话层（Session Layer）
	表示层（Presentation Layer）
	应用层（Application Layer）

	其中第四层完成数据传送服务，上面三层面向用户。


	
	
