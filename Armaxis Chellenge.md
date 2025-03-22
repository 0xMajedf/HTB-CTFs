## Description
In the depths of the Frontier, Armaxis powers the enemy’s dominance, dispatching weapons to crush rebellion. Fortified and hidden, it controls vital supply chains. Yet, a flaw whispers of opportunity, a crack to expose its secrets and disrupt their p

## Steps 

1. navigate to IP:34325, IP:34705

2. create a new account test@test.com:test

3. intercept the request u will find JWT token after logging 

4. after going to IP:34705 found a local email which is test@email.htb

5. navigate to IP:34325 and click forget password and send reset password for test@email.htb and intercept the request

6. it`s a POST request change the email to [admin email] admin@armaxis.htb 

7. finally changed the password for admin user login to admin account then dispatch a new weapon 

8. name: anything, price: anything

Note: ![](file:///flag.txt; cat) , User Email: admin@armaxis.htb

9. after dispatching a weapon found an embedded message after this inspect the page | found a base64 encode img decode it using burpsuite decode 
and retrieve the flag

HTB{m4rkd0wn_bugs_1n_th3_w1ld!}

#### Command Injection Vulnerability