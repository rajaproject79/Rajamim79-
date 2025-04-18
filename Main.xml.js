
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp">

    <TextView
        android:id="@+id/chatWindow"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:scrollbars="vertical"
        android:text="চ্যাট শুরু করুন..."
        android:textSize="18sp"
        android:padding="8dp"/>

    <EditText
        android:id="@+id/messageInput"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="আপনার মেসেজ লিখুন..."
        android:textSize="16sp"
        android:padding="10dp"/>

    <Button
        android:id="@+id/sendButton"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="পাঠান"
        android:textSize="18sp"
        android:layout_marginTop="10dp"/>
</LinearLayout>
