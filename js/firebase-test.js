import { rtdb } from '../firebase-config.js';
import { ref, set, get } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js';

// Test: Write data
async function testWrite() {
  try {
    await set(ref(rtdb, 'test/message'), {
      text: 'Hello Firebase!',
      timestamp: new Date().toISOString()
    });
    console.log('✅ Data written successfully!');
  } catch (error) {
    console.error('❌ Write failed:', error);
  }
}

// Test: Read data
async function testRead() {
  try {
    const snapshot = await get(ref(rtdb, 'test/message'));
    if (snapshot.exists()) {
      console.log('✅ Data read:', snapshot.val());
    } else {
      console.log('No data found');
    }
  } catch (error) {
    console.error('❌ Read failed:', error);
  }
}

// Run tests
console.log('Starting Firebase tests...');
testWrite().then(() => testRead());
