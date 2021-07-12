#include <Bridge.h>
#include <BridgeClient.h>
#include <BridgeServer.h>
#include <BridgeSSLClient.h>
#include <BridgeUdp.h>
#include <Console.h>
#include <FileIO.h>
#include <HttpClient.h>
#include <Mailbox.h>
#include <Process.h>
#include <YunClient.h>
#include <YunServer.h>

int i,j,moistvalue,vibrationvalue;
void setup() {
Serial.begin(9600);
Serial.println("OUTPUTS");
}

void loop() {
  delay (5000);
  for (i=0;i<4;i++)
  {moistvalue=analogRead(A0);
  Serial.println(moistvalue);
  delay(500);
  }
  for (j=0;j<4;j++)
  {
    vibrationvalue=digitalRead(A1);
    Serial.println(vibrationvalue);
    delay(500);
    
    }
  
}
