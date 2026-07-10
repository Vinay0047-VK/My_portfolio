import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db, auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { Trash2, LogOut, Mail, Clock } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Real-time listener for messages, ordered by newest first
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(msgs);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching messages: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteDoc(doc(db, "messages", id));
      } catch (error) {
        console.error("Error deleting message: ", error);
        alert("Failed to delete message.");
      }
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Just now';
    return timestamp.toDate().toLocaleString(undefined, {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <Mail className="header-icon" />
          <h1>Inbox</h1>
          <span className="message-count">{messages.length} messages</span>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          <LogOut size={18} />
          Logout
        </button>
      </header>

      <main className="dashboard-main">
        {loading ? (
          <div className="loading-state">Loading your messages...</div>
        ) : messages.length === 0 ? (
          <div className="empty-state">
            <Mail size={48} className="empty-icon" />
            <h2>No messages yet</h2>
            <p>When someone contacts you from your portfolio, it will appear here.</p>
          </div>
        ) : (
          <div className="messages-grid">
            {messages.map((msg) => (
              <div key={msg.id} className="message-card">
                <div className="message-header">
                  <div className="sender-info">
                    <div className="sender-avatar">
                      {msg.name ? msg.name.charAt(0).toUpperCase() : '?'}
                    </div>
                    <div>
                      <h3>{msg.name}</h3>
                      <a href={`mailto:${msg.email}`} className="sender-email">{msg.email}</a>
                    </div>
                  </div>
                  <div className="message-meta">
                    <span className="message-time">
                      <Clock size={14} />
                      {formatDate(msg.createdAt)}
                    </span>
                    <button 
                      onClick={() => handleDelete(msg.id)} 
                      className="delete-btn"
                      title="Delete message"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="message-body">
                  <h4 className="message-subject">{msg.subject}</h4>
                  <p className="message-content">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
