
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
$( document ).ready(function() {
    
	var url = window.location;
	
	$("#btnId").click(function(event){
        event.preventDefault();
        
        // Open Bootstrap Modal
        openModel();
        // Get data from Server
        ajaxGet();
	})
	
		
	$("#btn_testId").click(function(event){
        event.preventDefault();
        // Get data from Server
        ajax_testGet();
	})
	
    // Open Bootstrap Modal
    function openModel(){
    	$("#modalId").modal();
    }
    
    // DO GET
    function ajaxGet(){
        $.ajax({
            type : "GET",
            url : url + "/greeting",
            success: function(data){
            	// fill data to Modal Body
                fillData(data);
            },
            error : function(e) {
            	fillData(null);
            }
        });
    }
    
 // DO GET
    function ajax_testGet(){
        $.ajax({
            type : "GET",
            url : url + "/test",
            success: function(data){
            	// fill data to Modal Body
                fillTest(data);
            },
            error : function(e) {
            	fillData(null);
            }
        });
    }
    
    function fillData(data){
    	if(data!=null){
            $(".modal-body #greetingId").text(data);
    	}else{
            $(".modal-body #greetingId").text("Can Not Get Data from Server!");
    	}
    }
    function fillTest(data){
    	if(data!=null){
            $(".modal-body #testId").text(data);
    	}else{
            $(".modal-body #testId").text("Can Not Get Data from Server!");
    	}
    }
})