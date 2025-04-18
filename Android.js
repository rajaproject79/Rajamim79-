package com.example.chatapp;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private EditText messageInput;
    private Button sendButton;
    private TextView chatWindow;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        messageInput = findViewById(R.id.messageInput);
        sendButton = findViewById(R.id.sendButton);
        chatWindow = findViewById(R.id.chatWindow);

        sendButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String message = messageInput.getText().toString();
                if (!message.isEmpty()) {
                    chatWindow.append("রাজা: " + message + "\n");
                    messageInput.setText("");
                    
                    // Mim's response (a simple automated reply for now)
                    String response = "মিম: তোমার কথাগুলো খুব ভালো লাগলো!";
                    chatWindow.append(response + "\n");
                }
            }
        });
    }
          }
