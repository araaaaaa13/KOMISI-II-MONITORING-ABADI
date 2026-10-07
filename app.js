/**
 * RUANG JEJAK — LOGIKA APLIKASI
 * Kenangan Bersama Kakak Organisasi Selama Berproker
 * Fitur: Amplop Int
 * eraktif, Dasbor Admin, IndexedDB Photo Storage, Galeri & Apresiasi
 */

// ============================================================================
// 1. DATA DEFAULT (KENANGAN AWAL YANG ELEGAN & BERMAKNA)
// ============================================================================
const DEFAULT_MEMORIES = [
  {
    id: "mem-1",
    title: "Malam Puncak Makrab & Lingkaran Api Unggun",
    proker: "Makrab Keakraban 2024",
    date: "2024-10-14",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    people: ["Kak Rendy (Ketua)", "Kak Zahra (Sekretaris)", "Kak Bima (Acara)"],
    story: "Malam ketika semua rasa canggung antarangkatan melebur. Kak Rendy dan Kak Zahra membagikan cerita jatuh bangun organisasi beberapa tahun ke belakang. Di depan api unggun, kami menyadari bahwa menjadi bagian dari organisasi ini bukan sekadar menjalankan proker, tapi menemukan keluarga kedua.",
    likes: 42,
    featured: true
  },
  {
    id: "mem-2",
    title: "Gladi Bersih H-1 Seminar Nasional & Kepanikan Sound System",
    proker: "Seminar Nasional Teknologi",
    date: "2024-11-02",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    people: ["Kak Dika (Perkap)", "Kak Sarah (Humas)", "Kak Kevin (Bendahara)"],
    story: "Pukul 23.30 di auditorium kampus. Sound system mendadak berdengung keras dan layar proyektor padam. Panik luar biasa, tetapi Kak Dika tetap tenang memeriksa setiap kabel dan Kak Sarah menyemangati divisi kami dengan membawa sekotak martabak hangat. Keteladanan ketenangan mereka menyelamatkan hari esoknya.",
    likes: 38,
    featured: true
  },
  {
    id: "mem-3",
    title: "Tawa di Tengah Lumpur Bakti Sosial Desa Pesisir",
    proker: "Bakti Sosial Masyarakat",
    date: "2024-12-18",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    people: ["Kak Fathir (Koord Lapangan)", "Kak Nia (Konsumsi)"],
    story: "Hujan lebat mengguyur saat pembagian bantuan logistik ke balai desa. Sepatu kami basah kuyup penuh tanah liat, namun senyum anak-anak desa dan semangat Kak Fathir yang tak pernah mengeluh membuat rasa dingin itu sama sekali hilang.",
    likes: 29,
    featured: false
  },
  {
    id: "mem-4",
    title: "Revisi Proposal Ke-12 di Gazebo Senja Kampus",
    proker: "Dies Natalis Organisasi",
    date: "2025-01-20",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    people: ["Kak Ilham (Kestari)", "Kak Tiara (Acara)"],
    story: "Proposal yang dicoret berkali-kali oleh birokrasi kampus. Kami sempat ingin menyerah, tapi Kak Ilham duduk bersama kami berjam-jam, membedah setiap paragraf hingga tuntas sambil bercanda agar suasana tidak tegang. Beliau mengajarkan arti ketekunan yang sesungguhnya.",
    likes: 51,
    featured: true
  },
  {
    id: "mem-5",
    title: "Momen Haru Evaluasi Akhir Sidang Pleno",
    proker: "Musyawarah Besar & LPJ",
    date: "2025-03-05",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    people: ["Kak Rendy", "Kak Zahra", "Kak Gilang (BPO)"],
    story: "Saat palu sidang LPJ diketuk tanda kepengurusan selesai. Tangis haru pecah di ruang sidang. Terima kasih kakak-kakak yang sudah meluangkan waktu kuliah dan istirahatnya demi membimbing kami. Jejak langkah kalian akan selalu kami teruskan.",
    likes: 64,
    featured: true
  },
  {
    id: "mem-6",
    title: "Makan Malam Bersama Setelah Sidang Akhir Sukses",
    proker: "Syukuran Demisioner",
    date: "2025-03-12",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    people: ["Seluruh BPH & Staff Muda"],
    story: "Malam syukuran sederhana di warung tenda favorit seberang kampus. Tidak ada lagi beban rundown atau revisi LPJ, hanya gelak tawa dan ucapan terima kasih tulus dari hati ke hati.",
    likes: 33,
    featured: false
  }
];

const DEFAULT_TIMELINE = [
  {
    period: "Fase 1 — Awal Periode",
    title: "Latihan Dasar & Pembentukan Karakter",
    desc: "Masa orientasi di mana kami masih canggung menyapa kakak pengurus. Kakak mengenalkan esensi organisasi bukan sebagai hierarki, melainkan ruang tumbuh bersama.",
    quote: "“Kalian bukan hanya staf pembantu, kalian adalah penerus lentera ini.” — Kak Rendy"
  },
  {
    period: "Fase 2 — Pertengahan Periode",
    title: "Badai Proker Besar & Ujian Solidaritas",
    desc: "Rangkaian Seminar Nasional dan Bakti Sosial secara beruntun. Begadang berhari-hari, perbedaan pendapat yang sengit, namun selalu berakhir dengan evaluasi yang saling menguatkan.",
    quote: "“Proker yang sukses itu bonus, panitia yang tetap solid dan tersenyum adalah prestasi utama.”"
  },
  {
    period: "Fase 3 — Akhir Kepengurusan",
    title: "Musyawarah Besar & Tongkat Estafet",
    desc: "Pertanggungjawaban seluruh program kerja. Air mata haru dan pelukan hangat mengiringi purnatugas kakak-kakak pengurus sebelum melangkah ke jenjang wisuda.",
    quote: "“Perjalanan kami selesai di atas kertas, tapi persaudaraan ini abadi selamanya.”"
  }
];

const DEFAULT_MESSAGES = [
  {
    id: "msg-1",
    sender: "Arya (Staff Muda Acara 24)",
    recipient: "Kak Rendy & Kak Zahra",
    prokerRef: "Makrab Keakraban & Seminar",
    body: "Terima kasih banyak sudah sabar banget menghadapi kami yang sering salah dan bingung di awal. Bimbingan kakak berdua membuat kami berani memimpin. Sukses skripsi dan kariernya ke depan, Kak!",
    date: "15 Maret 2025",
    theme: "parchment"
  },
  {
    id: "msg-2",
    sender: "Nadhira (Divisi Humas)",
    recipient: "Kak Sarah & Tim Humas Senior",
    prokerRef: "Kerjasama Sponsorship Seminar Nasional",
    body: "Kak Sarah adalah role model terbaik! Terima kasih selalu mendampingi saat audiensi ke pihak luar dan mengajari cara negosiasi yang elegan. Bakal kangen meeting bareng sambil makan gorengan.",
    date: "18 Maret 2025",
    theme: "sage"
  },
  {
    id: "msg-3",
    sender: "Bagas (Divisi Perlengkapan)",
    recipient: "Kak Dika & Kak Fathir",
    prokerRef: "Bakti Sosial & Perlengkapan Panggung",
    body: "Untuk kakak-kakak perkap yang selalu pulang paling akhir dan datang paling awal: energi kalian luar biasa. Terima kasih sudah mengajarkan kami arti kerja ikhlas tanpa sorotan kamera.",
    date: "20 Maret 2025",
    theme: "blush"
  }
];

// ============================================================================
// 2. STATE MANAGEMENT & STORAGE (FIREBASE REALTIME DB + INDEXEDDB FALLBACK)
// ============================================================================
const firebaseConfig = {
  apiKey: "AIzaSyAzaSHpYIXHXu8zF8C1brppHwhu3XgCNEA",
  authDomain: "webkomtwo-3d431.firebaseapp.com",
  databaseURL: "https://webkomtwo-3d431-default-rtdb.firebaseio.com",
  projectId: "webkomtwo-3d431",
  storageBucket: "webkomtwo-3d431.firebasestorage.app",
  messagingSenderId: "773122461200",
  appId: "1:773122461200:web:bd2a7ac2fc9db9842ec495",
  measurementId: "G-C2CRSPLF34"
};
let db = null;
let firebaseInitialized = false;

let appState = {
  memories: [],
  messages: [],
  isAdmin: false,
  activeFilter: 'all',
  searchQuery: '',
  likedMemories: new Set()
};

// Update Cloud Status Indicator UI
function updateCloudStatus(status, text) {
  const badge = document.getElementById('cloudStatusBadge');
  const dot = document.getElementById('cloudStatusDot');
  const label = document.getElementById('cloudStatusText');

  const mobileBadge = document.getElementById('mobileCloudBadge');
  const mobileDot = document.getElementById('mobileCloudDot');
  const mobileLabel = document.getElementById('mobileCloudText');

  const applyStatus = (b, d, l) => {
    if (!b) return;
    b.classList.remove('connected', 'syncing', 'offline');
    if (status === 'connected') {
      b.classList.add('connected');
      if (l) l.textContent = text || 'Cloud Aktif';
      b.title = 'Terhubung ke Firebase Realtime Database (webkomtwo-3d431)';
    } else if (status === 'syncing') {
      b.classList.add('syncing');
      if (l) l.textContent = text || 'Sinkronisasi...';
      b.title = 'Sedang menyinkronkan data dengan Firebase...';
    } else {
      b.classList.add('offline');
      if (l) l.textContent = text || 'Mode Lokal';
      b.title = 'Tersimpan lokal (IndexedDB/localStorage)';
    }
  };

  applyStatus(badge, dot, label);
  applyStatus(mobileBadge, mobileDot, mobileLabel);
}

// IndexedDB Helper for Local Photo Storage & Caching
const DB_NAME = 'RuangJejakDB';
const DB_VERSION = 1;
const STORE_NAME = 'memories_store';

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const dbInstance = e.target.result;
      if (!dbInstance.objectStoreNames.contains(STORE_NAME)) {
        dbInstance.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = (e) => resolve(e.target.result);
    request.onerror = (e) => reject(e.target.error);
  });
}

async function saveMemoriesToDB(memories) {
  try {
    const localDb = await openDatabase();
    const tx = localDb.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    await new Promise((res, rej) => {
      const clearReq = store.clear();
      clearReq.onsuccess = () => res();
      clearReq.onerror = () => rej(clearReq.error);
    });
    for (const mem of memories) {
      store.put(mem);
    }
    return new Promise((res, rej) => {
      tx.oncomplete = () => res(true);
      tx.onerror = () => rej(tx.error);
    });
  } catch (err) {
    console.warn('IndexedDB write failed, falling back to localStorage:', err);
    try {
      localStorage.setItem('rj_memories_fallback', JSON.stringify(memories));
    } catch (e) {
      console.error('Storage quota exceeded:', e);
    }
  }
}

async function loadMemoriesFromDB() {
  try {
    const localDb = await openDatabase();
    const tx = localDb.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.getAll();
    return new Promise((resolve) => {
      request.onsuccess = () => {
        if (request.result && request.result.length > 0) {
          resolve(request.result);
        } else {
          resolve(null);
        }
      };
      request.onerror = () => resolve(null);
    });
  } catch (err) {
    console.warn('IndexedDB read failed:', err);
    const fallback = localStorage.getItem('rj_memories_fallback');
    return fallback ? JSON.parse(fallback) : null;
  }
}

// Initial Data Load (Instant local cache first)
async function initData() {
  // Check Likes
  try {
    const savedLikes = JSON.parse(localStorage.getItem('rj_likes') || '[]');
    appState.likedMemories = new Set(savedLikes);
  } catch (e) {
    appState.likedMemories = new Set();
  }

  // Load Memories from local storage first for instant render
  const storedMemories = await loadMemoriesFromDB();
  if (storedMemories && storedMemories.length > 0) {
    appState.memories = storedMemories;
  } else {
    appState.memories = [...DEFAULT_MEMORIES];
    await saveMemoriesToDB(appState.memories);
  }

  // Load Messages from local storage first
  const storedMessages = localStorage.getItem('rj_messages');
  if (storedMessages) {
    try {
      appState.messages = JSON.parse(storedMessages);
    } catch (e) {
      appState.messages = [...DEFAULT_MESSAGES];
    }
  } else {
    appState.messages = [...DEFAULT_MESSAGES];
    saveMessages();
  }

  // Check Admin Login State
  appState.isAdmin = sessionStorage.getItem('rj_is_admin') === 'true';

  updateAuthUI();
  updateStats();
  renderFilterChips();
  renderGallery();
  renderTimeline();
  renderMessages();
}

// Initialize Firebase & Realtime Listeners
function initFirebase() {
  if (typeof firebase !== 'undefined') {
    try {
      if (!firebase.apps || !firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      db = firebase.database();
      firebaseInitialized = true;
      try {
        if (firebase.analytics) firebase.analytics();
      } catch (e) {
        // Analytics optional
      }

      updateCloudStatus('syncing', 'Menyambung...');

      // Monitor connection state
      const connectedRef = db.ref('.info/connected');
      connectedRef.on('value', (snap) => {
        if (snap.val() === true) {
          updateCloudStatus('connected', 'Cloud Aktif');
        } else {
          updateCloudStatus('offline', 'Mode Lokal');
        }
      });

      setupFirebaseListeners();
    } catch (err) {
      console.warn('Firebase init error:', err);
      updateCloudStatus('offline', 'Mode Lokal');
    }
  } else {
    console.warn('Firebase SDK compat tidak dimuat, berjalan pada penyimpanan lokal.');
    updateCloudStatus('offline', 'Mode Lokal');
  }
}

// Real-time synchronization listeners
function setupFirebaseListeners() {
  if (!db) return;

  // Real-time listener: Memories
  db.ref('memories').on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      let list = Array.isArray(data) ? data.filter(Boolean) : Object.values(data);
      // Sort memories by date descending
      list.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
      appState.memories = list;
      saveMemoriesToDB(list);
      updateStats();
      renderFilterChips();
      renderGallery();
      renderAdminPhotosTable();
    } else {
      // If Firebase database node is empty, seed with default memories
      seedDefaultMemoriesToFirebase();
    }
  }, (err) => {
    console.warn('Firebase memories listener error:', err);
  });

  // Real-time listener: Messages
  db.ref('messages').on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
      let list = Array.isArray(data) ? data.filter(Boolean) : Object.values(data);
      list.sort((a, b) => (b.id > a.id ? 1 : -1));
      appState.messages = list;
      saveMessages();
      updateStats();
      renderMessages();
      renderAdminMessagesTable();
    } else {
      // If Firebase database node is empty, seed with default messages
      seedDefaultMessagesToFirebase();
    }
  }, (err) => {
    console.warn('Firebase messages listener error:', err);
  });
}

// Seed default data to Firebase Realtime Database
async function seedDefaultMemoriesToFirebase() {
  if (!db) return;
  try {
    const updates = {};
    DEFAULT_MEMORIES.forEach(m => {
      updates[m.id] = m;
    });
    await db.ref('memories').set(updates);
    console.log('Default memories successfully seeded to Firebase.');
  } catch (err) {
    console.warn('Gagal seeding memories ke Firebase:', err);
  }
}

async function seedDefaultMessagesToFirebase() {
  if (!db) return;
  try {
    const updates = {};
    DEFAULT_MESSAGES.forEach(m => {
      updates[m.id] = m;
    });
    await db.ref('messages').set(updates);
    console.log('Default messages successfully seeded to Firebase.');
  } catch (err) {
    console.warn('Gagal seeding messages ke Firebase:', err);
  }
}

function saveMessages() {
  localStorage.setItem('rj_messages', JSON.stringify(appState.messages));
}

function saveLikes() {
  localStorage.setItem('rj_likes', JSON.stringify(Array.from(appState.likedMemories)));
}

// ============================================================================
// 3. UI RENDERING FUNCTIONS
// ============================================================================

// Update Header Stats
function updateStats() {
  const uniqueProkers = new Set(appState.memories.map(m => m.proker));
  document.getElementById('statProkerCount').textContent = uniqueProkers.size;
  document.getElementById('statPhotosCount').textContent = appState.memories.length;
  document.getElementById('statMessagesCount').textContent = appState.messages.length;

  const manageBadge = document.getElementById('manageCountBadge');
  if (manageBadge) manageBadge.textContent = appState.memories.length;

  const msgBadge = document.getElementById('messagesCountBadge');
  if (msgBadge) msgBadge.textContent = appState.messages.length;

  const totalPhotosText = document.getElementById('adminTotalPhotosText');
  if (totalPhotosText) totalPhotosText.textContent = appState.memories.length;
}

// Filter Chips Generation
function renderFilterChips() {
  const filterContainer = document.getElementById('filterChips');
  if (!filterContainer) return;

  const prokers = Array.from(new Set(appState.memories.map(m => m.proker).filter(Boolean)));

  let html = `<button class="chip ${appState.activeFilter === 'all' ? 'active' : ''}" data-filter="all">Semua Momen</button>`;

  prokers.forEach(proker => {
    const isActive = appState.activeFilter === proker;
    html += `<button class="chip ${isActive ? 'active' : ''}" data-filter="${escapeHTML(proker)}">${escapeHTML(proker)}</button>`;
  });

  filterContainer.innerHTML = html;

  // Add Click Listeners to Chips
  filterContainer.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      appState.activeFilter = btn.dataset.filter;
      filterContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      renderGallery();
    });
  });
}

// Gallery Photo Cards
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  const emptyState = document.getElementById('emptyState');
  if (!grid) return;

  let filtered = [...appState.memories];

  // Apply Proker Filter
  if (appState.activeFilter !== 'all') {
    filtered = filtered.filter(m => m.proker === appState.activeFilter);
  }

  // Apply Search Query
  if (appState.searchQuery.trim() !== '') {
    const q = appState.searchQuery.toLowerCase();
    filtered = filtered.filter(m => {
      const inTitle = m.title && m.title.toLowerCase().includes(q);
      const inProker = m.proker && m.proker.toLowerCase().includes(q);
      const inStory = m.story && m.story.toLowerCase().includes(q);
      const inPeople = Array.isArray(m.people)
        ? m.people.some(p => p.toLowerCase().includes(q))
        : (m.people && m.people.toLowerCase().includes(q));
      return inTitle || inProker || inStory || inPeople;
    });
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(m => {
    const isLiked = appState.likedMemories.has(m.id);
    const peopleList = Array.isArray(m.people) ? m.people : (m.people ? m.people.split(',') : []);
    const peoplePreview = peopleList.length > 0 ? peopleList.slice(0, 2).join(', ') + (peopleList.length > 2 ? ' +' + (peopleList.length - 2) : '') : 'BPH & Panitia';
    const formattedDate = formatDateIndonesian(m.date);

    return `
      <article class="memory-card" data-id="${m.id}" tabindex="0" role="button" aria-label="Lihat kenangan: ${escapeHTML(m.title)}">
        <div class="memory-media-wrap">
          <img src="${escapeHTML(m.image)}" alt="${escapeHTML(m.title)}" loading="lazy">
          <span class="memory-proker-tag">${escapeHTML(m.proker)}</span>
          ${m.featured ? `<span class="featured-pin"><i class="fa-solid fa-thumbtack"></i> Sorotan</span>` : ''}
          ${appState.isAdmin ? `
            <button type="button" class="admin-card-delete-btn" data-delete-id="${m.id}" title="Hapus foto ini (Admin)" aria-label="Hapus foto ${escapeHTML(m.title)}">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          ` : ''}
        </div>
        <div class="memory-body">
          <div class="memory-date">
            <i class="fa-regular fa-calendar"></i> ${formattedDate}
          </div>
          <h3 class="memory-title">${escapeHTML(m.title)}</h3>
          <p class="memory-story-snippet">${escapeHTML(m.story)}</p>
          <div class="memory-card-footer">
            <div class="memory-people-preview" title="Kakak & Pengurus: ${escapeHTML(peopleList.join(', '))}">
              <i class="fa-solid fa-users"></i>
              <span>${escapeHTML(peoplePreview)}</span>
            </div>
            <button class="memory-like-btn ${isLiked ? 'liked' : ''}" data-like-id="${m.id}" title="Sukai momen ini" aria-label="Suka">
              <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              <span class="likes-num">${m.likes || 0}</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Add click events for Card opening Lightbox
  grid.querySelectorAll('.memory-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.memory-like-btn') || e.target.closest('.admin-card-delete-btn')) return; // ignore if clicking heart or delete
      const id = card.dataset.id;
      openDetailModal(id);
    });
  });

  // Add admin delete button listeners
  grid.querySelectorAll('.admin-card-delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.deleteId;
      if (typeof window.deletePhoto === 'function') {
        window.deletePhoto(id);
      }
    });
  });

  // Add like button listeners
  grid.querySelectorAll('.memory-like-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.likeId;
      toggleLike(id, btn);
    });
  });
}

// Like Handler
function toggleLike(id, btnElement) {
  const memory = appState.memories.find(m => m.id === id);
  if (!memory) return;

  const isLiked = appState.likedMemories.has(id);
  if (isLiked) {
    appState.likedMemories.delete(id);
    memory.likes = Math.max(0, (memory.likes || 1) - 1);
  } else {
    appState.likedMemories.add(id);
    memory.likes = (memory.likes || 0) + 1;
    showToast('Terima kasih apresiasinya untuk momen ini! ❤️', 'success');
  }

  saveLikes();

  // Sync like count to Firebase RTDB
  if (db) {
    db.ref('memories/' + id + '/likes').transaction((curr) => {
      const currentVal = typeof curr === 'number' ? curr : (memory.likes || 0);
      return isLiked ? Math.max(0, currentVal - 1) : currentVal + 1;
    });
  } else {
    saveMemoriesToDB(appState.memories);
  }

  // Update UI immediately
  if (btnElement) {
    btnElement.classList.toggle('liked', !isLiked);
    const icon = btnElement.querySelector('i');
    if (icon) icon.className = !isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    const num = btnElement.querySelector('.likes-num');
    if (num) num.textContent = memory.likes;
  }
}

// Timeline Rendering
function renderTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = DEFAULT_TIMELINE.map(item => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-card">
        <span class="timeline-period">${escapeHTML(item.period)}</span>
        <h3 class="timeline-title">${escapeHTML(item.title)}</h3>
        <p class="timeline-desc">${escapeHTML(item.desc)}</p>
        <div class="timeline-quote">${escapeHTML(item.quote)}</div>
      </div>
    </div>
  `).join('');
}

// Gratitude Wall / Surat & Pesan Rendering
function renderMessages() {
  const grid = document.getElementById('messagesGrid');
  if (!grid) return;

  if (appState.messages.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center" style="grid-column: 1 / -1; padding: 2rem;">
        <p class="text-muted">Belum ada surat yang dipajang. Jadilah yang pertama menitipkan pesan untuk kakak pengurus!</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = appState.messages.map(msg => `
    <article class="letter-note-card theme-${escapeHTML(msg.theme || 'parchment')}">
      <div class="letter-note-pin"></div>
      <div class="note-to-badge">
        <i class="fa-solid fa-envelope-open-text"></i> Kepada: ${escapeHTML(msg.recipient)}
      </div>
      ${msg.prokerRef ? `<span class="note-proker-ref"><i class="fa-solid fa-bookmark"></i> Momen: ${escapeHTML(msg.prokerRef)}</span>` : ''}
      <div class="note-content-text">
        “${escapeHTML(msg.body)}”
      </div>
      <div class="note-sender-info">
        <span class="note-sender-name">Dari: ${escapeHTML(msg.sender)}</span>
        <span class="note-date-text">${escapeHTML(msg.date)}</span>
      </div>
    </article>
  `).join('');
}

// Detail / Lightbox Modal
function openDetailModal(id) {
  const memory = appState.memories.find(m => m.id === id);
  if (!memory) return;

  const modal = document.getElementById('detailModal');
  document.getElementById('detailImg').src = memory.image;
  document.getElementById('detailProkerBadge').textContent = memory.proker || 'Program Kerja';
  document.getElementById('detailDate').innerHTML = `<i class="fa-regular fa-calendar"></i> ${formatDateIndonesian(memory.date)}`;
  document.getElementById('detailTitle').textContent = memory.title;
  document.getElementById('detailStory').textContent = memory.story;

  const likesCount = document.getElementById('detailLikesCount');
  if (likesCount) likesCount.textContent = memory.likes || 0;

  const peopleContainer = document.getElementById('detailPeopleTags');
  const peopleList = Array.isArray(memory.people) ? memory.people : (memory.people ? memory.people.split(',') : []);

  if (peopleContainer) {
    if (peopleList.length > 0) {
      peopleContainer.innerHTML = peopleList.map(p => `<span class="person-tag">${escapeHTML(p.trim())}</span>`).join('');
    } else {
      peopleContainer.innerHTML = `<span class="person-tag">Seluruh Panitia & Pengurus</span>`;
    }
  }

  // Setup detail like button
  const likesBtn = document.getElementById('detailLikesBtn');
  if (likesBtn) {
    const isLiked = appState.likedMemories.has(id);
    likesBtn.innerHTML = `<i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> <span id="detailLikesCount">${memory.likes || 0}</span> Suka`;
    likesBtn.onclick = () => {
      toggleLike(id);
      const isNowLiked = appState.likedMemories.has(id);
      likesBtn.innerHTML = `<i class="${isNowLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> <span id="detailLikesCount">${memory.likes || 0}</span> Suka`;
      renderGallery();
    };
  }

  // Setup Share button
  const shareBtn = document.getElementById('btnShareMoment');
  if (shareBtn) {
    shareBtn.onclick = () => {
      if (navigator.share) {
        navigator.share({
          title: memory.title,
          text: `Kenangan ${memory.proker}: "${memory.title}" bersama kakak organisasi.`,
          url: window.location.href
        }).catch(() => { });
      } else {
        navigator.clipboard.writeText(window.location.href);
        showToast('Tautan kenangan disalin ke papan klip!', 'info');
      }
    };
  }

  // Setup Admin Delete button in Detail Modal
  const actionsContainer = modal.querySelector('.detail-footer-actions');
  if (actionsContainer) {
    let adminDelBtn = actionsContainer.querySelector('.btn-detail-delete-admin');
    if (appState.isAdmin) {
      if (!adminDelBtn) {
        adminDelBtn = document.createElement('button');
        adminDelBtn.className = 'btn btn-outline-danger btn-sm btn-detail-delete-admin';
        adminDelBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i> Hapus Foto';
        actionsContainer.appendChild(adminDelBtn);
      }
      adminDelBtn.onclick = () => {
        closeDetailModal();
        if (typeof window.deletePhoto === 'function') {
          window.deletePhoto(id);
        }
      };
      adminDelBtn.style.display = 'inline-flex';
    } else if (adminDelBtn) {
      adminDelBtn.style.display = 'none';
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  const modal = document.getElementById('detailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ============================================================================
// 4. INTERACTIVE 3D ENVELOPE LOGIN SYSTEM
// ============================================================================
function initEnvelopeLogin() {
  const loginModal = document.getElementById('loginModal');
  const envelopeContainer = document.getElementById('envelopeContainer');
  const waxSealBtn = document.getElementById('waxSealBtn');
  const closeLoginModalBtn = document.getElementById('closeLoginModal');
  const openLoginBtn = document.getElementById('btnOpenLoginModal');
  const heroEnvelopeBtn = document.getElementById('btnEnvelopeDemo');
  const mobileLoginBtn = document.getElementById('btnMobileLogin');
  const footerAdminBtn = document.getElementById('footerAdminBtn');
  const fillCredsBtn = document.getElementById('fillAdminCreds');
  const togglePwdBtn = document.getElementById('togglePwdBtn');
  const adminLoginForm = document.getElementById('adminLoginForm');

  // Trigger modal open
  function showEnvelopeModal(autoOpen = false) {
    // If already logged in, directly open Admin Dashboard
    if (appState.isAdmin) {
      openAdminModal();
      return;
    }

    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reset envelope state
    envelopeContainer.classList.remove('opened');
    clearLoginFeedback();

    if (autoOpen) {
      setTimeout(() => {
        openEnvelope();
      }, 400);
    }
  }

  function closeEnvelopeModal() {
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
    envelopeContainer.classList.remove('opened');
  }

  function openEnvelope() {
    if (envelopeContainer.classList.contains('opened')) return;

    // Play synthetic paper opening audio chime
    playPaperRustleSound();

    envelopeContainer.classList.add('opened');

    // Auto-focus username field after card unfolds
    setTimeout(() => {
      const usernameInput = document.getElementById('adminUsername');
      if (usernameInput) usernameInput.focus();
    }, 700);
  }

  // Click on wax seal opens envelope
  if (waxSealBtn) {
    waxSealBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openEnvelope();
    });
    waxSealBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openEnvelope();
      }
    });
  }

  // Bind Buttons
  if (openLoginBtn) openLoginBtn.addEventListener('click', () => showEnvelopeModal(false));
  if (heroEnvelopeBtn) heroEnvelopeBtn.addEventListener('click', () => showEnvelopeModal(true));
  if (mobileLoginBtn) {
    mobileLoginBtn.addEventListener('click', () => {
      closeMobileDrawer();
      showEnvelopeModal(false);
    });
  }
  if (footerAdminBtn) footerAdminBtn.addEventListener('click', () => showEnvelopeModal(false));

  if (closeLoginModalBtn) {
    closeLoginModalBtn.addEventListener('click', closeEnvelopeModal);
  }

  // Close when clicking outside envelope
  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      closeEnvelopeModal();
    }
  });

  // Toggle Password Visibility
  if (togglePwdBtn) {
    togglePwdBtn.addEventListener('click', () => {
      const pwdInput = document.getElementById('adminPassword');
      const icon = togglePwdBtn.querySelector('i');
      if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        icon.className = 'fa-regular fa-eye-slash';
      } else {
        pwdInput.type = 'password';
        icon.className = 'fa-regular fa-eye';
      }
    });
  }

  // Quick Credential auto-fill helper
  if (fillCredsBtn) {
    fillCredsBtn.addEventListener('click', () => {
      document.getElementById('adminUsername').value = 'admin';
      document.getElementById('adminPassword').value = 'proker123';
      showToast('Kredensial otomatis terisi!', 'info');
    });
  }

  // Form Submit: Validate Admin Login
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('adminUsername').value.trim();
      const pass = document.getElementById('adminPassword').value;

      // Accepted credentials: admin / proker123
      if (user.toLowerCase() === 'admin' && pass === 'proker123') {
        setLoginFeedback('Kredensial valid. Membuka Dasbor Pengurus...', 'success');
        appState.isAdmin = true;
        sessionStorage.setItem('rj_is_admin', 'true');

        setTimeout(() => {
          closeEnvelopeModal();
          updateAuthUI();
          openAdminModal();
          showToast('Selamat datang di Ruang Kendali Admin!', 'success');
        }, 800);
      } else {
        setLoginFeedback('Nama pengguna atau kata sandi tidak cocok. Silakan coba kembali.', 'error');
      }
    });
  }
}

function setLoginFeedback(msg, type) {
  const el = document.getElementById('loginFeedback');
  if (!el) return;
  el.textContent = msg;
  el.className = `login-feedback ${type}`;
  el.classList.remove('hidden');
}

function clearLoginFeedback() {
  const el = document.getElementById('loginFeedback');
  if (!el) return;
  el.classList.add('hidden');
  el.textContent = '';
}

function updateAuthUI() {
  const authBtnText = document.getElementById('authBtnText');
  const authBtnIcon = document.getElementById('authBtnIcon');
  const btnOpenLoginModal = document.getElementById('btnOpenLoginModal');

  if (appState.isAdmin) {
    if (authBtnText) authBtnText.textContent = 'Dasbor Admin';
    if (authBtnIcon) authBtnIcon.className = 'fa-solid fa-gauge-high';
    if (btnOpenLoginModal) {
      btnOpenLoginModal.title = 'Buka Dasbor Pengurus';
    }
  } else {
    if (authBtnText) authBtnText.textContent = 'Masuk / Admin';
    if (authBtnIcon) authBtnIcon.className = 'fa-solid fa-lock';
    if (btnOpenLoginModal) {
      btnOpenLoginModal.title = 'Masuk Admin Pengurus';
    }
  }

  renderGallery();
}

// ============================================================================
// 5. ADMIN DASHBOARD & CRUD OPERATIONS
// ============================================================================
let currentUploadedImageDataUrl = null;

function initAdminDashboard() {
  const adminModal = document.getElementById('adminModal');
  const closeAdminModalBtn = document.getElementById('closeAdminModal');
  const btnAdminLogout = document.getElementById('btnAdminLogout');
  const adminTabs = document.querySelectorAll('.admin-tab');

  // Tab switching
  adminTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;
      adminTabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');

      if (targetId === 'tabManage') renderAdminPhotosTable();
      if (targetId === 'tabMessages') renderAdminMessagesTable();
    });
  });

  if (closeAdminModalBtn) {
    closeAdminModalBtn.addEventListener('click', closeAdminModal);
  }

  if (btnAdminLogout) {
    btnAdminLogout.addEventListener('click', () => {
      appState.isAdmin = false;
      sessionStorage.removeItem('rj_is_admin');
      updateAuthUI();
      closeAdminModal();
      showToast('Sesi admin telah ditutup.', 'info');
    });
  }

  // Photo Upload Setup (Dropzone & URL)
  initPhotoDropzone();

  // Upload Form Submit
  const uploadForm = document.getElementById('uploadMemoryForm');
  if (uploadForm) {
    uploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const imageSource = currentUploadedImageDataUrl || document.getElementById('photoUrlInput').value.trim();
      if (!imageSource) {
        showToast('Harap pilih foto atau masukkan URL gambar terlebih dahulu!', 'error');
        return;
      }

      const newMemory = {
        id: 'mem-' + Date.now(),
        title: document.getElementById('memTitle').value.trim(),
        proker: document.getElementById('memProker').value.trim(),
        date: document.getElementById('memDate').value || new Date().toISOString().split('T')[0],
        image: imageSource,
        people: document.getElementById('memPeople').value.split(',').map(s => s.trim()).filter(Boolean),
        story: document.getElementById('memStory').value.trim(),
        likes: 0,
        featured: document.getElementById('memFeatured').checked
      };

      // Save to Firebase RTDB if online, otherwise fallback to local DB
      if (db) {
        updateCloudStatus('syncing', 'Menyimpan...');
        try {
          await db.ref('memories/' + newMemory.id).set(newMemory);
          updateCloudStatus('connected', 'Cloud Aktif');
        } catch (err) {
          console.warn('Gagal menyimpan ke Firebase:', err);
          appState.memories.unshift(newMemory);
          await saveMemoriesToDB(appState.memories);
          updateStats();
          renderFilterChips();
          renderGallery();
        }
      } else {
        appState.memories.unshift(newMemory);
        await saveMemoriesToDB(appState.memories);
        updateStats();
        renderFilterChips();
        renderGallery();
      }

      showToast(`Kenangan "${newMemory.title}" berhasil diarsipkan! 🎉`, 'success');

      // Reset form & preview
      resetUploadForm();

      // Switch to Manage tab to view newly added item
      const manageTab = document.querySelector('.admin-tab[data-tab="tabManage"]');
      if (manageTab) manageTab.click();
    });
  }

  // Backup & Restore Handlers
  const btnExport = document.getElementById('btnExportData');
  if (btnExport) {
    btnExport.addEventListener('click', exportDataBackup);
  }

  const btnTriggerImport = document.getElementById('btnTriggerImport');
  const importInput = document.getElementById('importJsonInput');
  if (btnTriggerImport && importInput) {
    btnTriggerImport.addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', importDataBackup);
  }

  const btnResetDefaults = document.getElementById('btnResetToDefaults');
  if (btnResetDefaults) {
    btnResetDefaults.addEventListener('click', resetToDefaultData);
  }

  // Admin Search filter for photos table
  const adminSearchPhotos = document.getElementById('adminSearchPhotos');
  if (adminSearchPhotos) {
    adminSearchPhotos.addEventListener('input', (e) => {
      renderAdminPhotosTable(e.target.value.toLowerCase());
    });
  }
}

function openAdminModal() {
  const modal = document.getElementById('adminModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  updateStats();
  renderAdminPhotosTable();
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function initPhotoDropzone() {
  const dropzone = document.getElementById('dropzoneBox');
  const fileInput = document.getElementById('photoFileInput');
  const previewBox = document.getElementById('dropzonePreview');
  const previewImg = document.getElementById('previewImageElement');
  const promptBox = document.getElementById('dropzonePrompt');
  const btnRemove = document.getElementById('btnRemovePreview');
  const btnApplyUrl = document.getElementById('btnApplyUrl');
  const urlInput = document.getElementById('photoUrlInput');

  function handleFile(file) {
    if (!file || !file.type.startsWith('image/')) {
      showToast('Harap pilih berkas gambar yang sah (PNG, JPG, WEBP)!', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxDimension = 1200;
        let width = img.width;
        let height = img.height;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        currentUploadedImageDataUrl = canvas.toDataURL('image/webp', 0.4);
        previewImg.src = currentUploadedImageDataUrl;
        previewBox.classList.remove('hidden');
        promptBox.classList.add('hidden');
        showToast('Foto dioptimalkan & siap diunggah!', 'info');
      };
      img.onerror = () => {
        currentUploadedImageDataUrl = e.target.result;
        previewImg.src = currentUploadedImageDataUrl;
        previewBox.classList.remove('hidden');
        promptBox.classList.add('hidden');
        showToast('Foto siap diunggah!', 'info');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0]);
      }
    });
  }

  if (dropzone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    });
  }

  if (btnRemove) {
    btnRemove.addEventListener('click', (e) => {
      e.stopPropagation();
      currentUploadedImageDataUrl = null;
      fileInput.value = '';
      previewBox.classList.add('hidden');
      promptBox.classList.remove('hidden');
    });
  }

  if (btnApplyUrl && urlInput) {
    btnApplyUrl.addEventListener('click', () => {
      const url = urlInput.value.trim();
      if (!url) {
        showToast('Masukkan URL gambar terlebih dahulu', 'error');
        return;
      }
      currentUploadedImageDataUrl = url;
      previewImg.src = url;
      previewBox.classList.remove('hidden');
      promptBox.classList.add('hidden');
      showToast('Pratinjau gambar URL berhasil dimuat!', 'info');
    });
  }
}

function resetUploadForm() {
  document.getElementById('uploadMemoryForm').reset();
  currentUploadedImageDataUrl = null;
  const fileInput = document.getElementById('photoFileInput');
  if (fileInput) fileInput.value = '';
  document.getElementById('dropzonePreview').classList.add('hidden');
  document.getElementById('dropzonePrompt').classList.remove('hidden');
}

// Render Admin Photos Management Table
function renderAdminPhotosTable(query = '') {
  const tbody = document.getElementById('adminPhotosTableBody');
  if (!tbody) return;

  let items = [...appState.memories];
  if (query) {
    items = items.filter(m =>
      (m.title && m.title.toLowerCase().includes(query)) ||
      (m.proker && m.proker.toLowerCase().includes(query))
    );
  }

  if (items.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted" style="padding: 2rem;">Tidak ada foto yang ditemukan.</td></tr>`;
    return;
  }

  tbody.innerHTML = items.map(m => {
    const people = Array.isArray(m.people) ? m.people.join(', ') : (m.people || '-');
    return `
      <tr>
        <td>
          <img src="${escapeHTML(m.image)}" class="table-thumb" alt="${escapeHTML(m.title)}">
        </td>
        <td>
          <strong>${escapeHTML(m.title)}</strong><br>
          <small class="text-muted">${formatDateIndonesian(m.date)}</small>
        </td>
        <td><span class="person-tag">${escapeHTML(m.proker)}</span></td>
        <td><small>${escapeHTML(people)}</small></td>
        <td>
          <button class="btn btn-sm ${m.featured ? 'btn-primary' : 'btn-outline'}" onclick="toggleFeaturedPhoto('${m.id}')" title="Ubah status sorotan">
            <i class="fa-solid fa-thumbtack"></i> ${m.featured ? 'Ya' : 'Tidak'}
          </button>
        </td>
        <td class="text-right">
          <div class="table-action-btns">
            <button class="btn-icon danger" onclick="deletePhoto('${m.id}')" title="Hapus kenangan ini">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.toggleFeaturedPhoto = async function (id) {
  const item = appState.memories.find(m => m.id === id);
  if (!item) return;
  item.featured = !item.featured;
  
  if (db) {
    updateCloudStatus('syncing', 'Memperbarui...');
    try {
      await db.ref('memories/' + id + '/featured').set(item.featured);
      updateCloudStatus('connected', 'Cloud Aktif');
    } catch (err) {
      console.warn('Gagal update status sorotan di Firebase:', err);
    }
  } else {
    await saveMemoriesToDB(appState.memories);
  }

  renderAdminPhotosTable();
  renderGallery();
  showToast(`Status sorotan untuk "${item.title}" diperbarui.`, 'info');
};

window.deletePhoto = async function (id) {
  const item = appState.memories.find(m => m.id === id);
  if (!item) return;

  if (confirm(`Apakah kamu yakin ingin menghapus kenangan "${item.title}"?`)) {
    if (db) {
      updateCloudStatus('syncing', 'Menghapus...');
      try {
        await db.ref('memories/' + id).remove();
        updateCloudStatus('connected', 'Cloud Aktif');
      } catch (err) {
        console.warn('Gagal menghapus dari Firebase:', err);
      }
    } else {
      appState.memories = appState.memories.filter(m => m.id !== id);
      await saveMemoriesToDB(appState.memories);
      updateStats();
      renderFilterChips();
      renderAdminPhotosTable();
      renderGallery();
    }
    showToast('Foto kenangan berhasil dihapus.', 'info');
  }
};

// Render Admin Messages Management Table
function renderAdminMessagesTable() {
  const tbody = document.getElementById('adminMessagesTableBody');
  if (!tbody) return;

  if (appState.messages.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center text-muted" style="padding: 2rem;">Belum ada surat tersimpan.</td></tr>`;
    return;
  }

  tbody.innerHTML = appState.messages.map(msg => `
    <tr>
      <td><strong>${escapeHTML(msg.sender)}</strong></td>
      <td><span class="person-tag">${escapeHTML(msg.recipient)}</span></td>
      <td><small>“${escapeHTML(msg.body)}”</small></td>
      <td><small class="text-muted">${escapeHTML(msg.date)}</small></td>
      <td class="text-right">
        <button class="btn-icon danger" onclick="deleteMessage('${msg.id}')" title="Hapus pesan ini">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </td>
    </tr>
  `).join('');
}

window.deleteMessage = async function (id) {
  if (confirm('Hapus surat apresiasi ini dari papan?')) {
    if (db) {
      updateCloudStatus('syncing', 'Menghapus...');
      try {
        await db.ref('messages/' + id).remove();
        updateCloudStatus('connected', 'Cloud Aktif');
      } catch (err) {
        console.warn('Gagal menghapus pesan dari Firebase:', err);
      }
    } else {
      appState.messages = appState.messages.filter(m => m.id !== id);
      saveMessages();
      updateStats();
      renderAdminMessagesTable();
      renderMessages();
    }
    showToast('Pesan berhasil dihapus.', 'info');
  }
};

// Backup & Restore
function exportDataBackup() {
  const backupData = {
    exportDate: new Date().toISOString(),
    memories: appState.memories,
    messages: appState.messages
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `ruang-jejak-cadangan-${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast('Berkas cadangan berhasil diunduh!', 'success');
}

function importDataBackup(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      if (Array.isArray(parsed.memories)) {
        if (db) {
          const memUpdates = {};
          parsed.memories.forEach(m => { memUpdates[m.id] = m; });
          await db.ref('memories').set(memUpdates);
        } else {
          appState.memories = parsed.memories;
          await saveMemoriesToDB(appState.memories);
        }
      }
      if (Array.isArray(parsed.messages)) {
        if (db) {
          const msgUpdates = {};
          parsed.messages.forEach(m => { msgUpdates[m.id] = m; });
          await db.ref('messages').set(msgUpdates);
        } else {
          appState.messages = parsed.messages;
          saveMessages();
        }
      }
      updateStats();
      renderFilterChips();
      renderGallery();
      renderMessages();
      renderAdminPhotosTable();
      renderAdminMessagesTable();
      showToast('Cadangan data berhasil dipulihkan!', 'success');
    } catch (err) {
      showToast('Gagal membaca berkas JSON cadangan.', 'error');
    }
  };
  reader.readAsText(file);
}

async function resetToDefaultData() {
  if (confirm('Kembalikan semua galeri foto dan pesan ke versi contoh awal? Data baru yang belum dicadangkan akan hilang.')) {
    if (db) {
      updateCloudStatus('syncing', 'Mereset...');
      await seedDefaultMemoriesToFirebase();
      await seedDefaultMessagesToFirebase();
      updateCloudStatus('connected', 'Cloud Aktif');
    } else {
      appState.memories = [...DEFAULT_MEMORIES];
      appState.messages = [...DEFAULT_MESSAGES];
      await saveMemoriesToDB(appState.memories);
      saveMessages();
      updateStats();
      renderFilterChips();
      renderGallery();
      renderMessages();
      renderAdminPhotosTable();
      renderAdminMessagesTable();
    }
    showToast('Data berhasil di-reset ke pengaturan bawaan.', 'success');
  }
}

// ============================================================================
// 6. TULIS PESAN / SURAT UNTUK KAKAK
// ============================================================================
function initWriteMessageModal() {
  const modal = document.getElementById('writeMessageModal');
  const btnOpenTop = document.getElementById('btnOpenWriteMessage');
  const btnOpenBottom = document.getElementById('btnOpenWriteMessageBottom');
  const btnMobileWrite = document.getElementById('btnMobileWrite');
  const closeBtn = document.getElementById('closeWriteModal');
  const form = document.getElementById('writeMessageForm');

  function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (btnOpenTop) btnOpenTop.addEventListener('click', openModal);
  if (btnOpenBottom) btnOpenBottom.addEventListener('click', openModal);
  if (btnMobileWrite) {
    btnMobileWrite.addEventListener('click', () => {
      closeMobileDrawer();
      openModal();
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const sender = document.getElementById('msgSenderName').value.trim();
      const recipient = document.getElementById('msgRecipientName').value.trim();
      const prokerRef = document.getElementById('msgProkerRef').value.trim();
      const body = document.getElementById('msgBody').value.trim();
      const themeRadio = document.querySelector('input[name="letterTheme"]:checked');
      const theme = themeRadio ? themeRadio.value : 'parchment';

      const newMessage = {
        id: 'msg-' + Date.now(),
        sender,
        recipient,
        prokerRef,
        body,
        date: formatDateIndonesian(new Date().toISOString().split('T')[0]),
        theme
      };

      if (db) {
        updateCloudStatus('syncing', 'Mengirim...');
        try {
          await db.ref('messages/' + newMessage.id).set(newMessage);
          updateCloudStatus('connected', 'Cloud Aktif');
        } catch (err) {
          console.warn('Gagal menyimpan pesan ke Firebase:', err);
          appState.messages.unshift(newMessage);
          saveMessages();
          updateStats();
          renderMessages();
        }
      } else {
        appState.messages.unshift(newMessage);
        saveMessages();
        updateStats();
        renderMessages();
      }

      closeModal();
      form.reset();
      showToast('Suratmu telah disematkan di dinding apresiasi! ✨', 'success');

      // Scroll smoothly to messages section
      const msgSection = document.getElementById('pesan');
      if (msgSection) msgSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// ============================================================================
// 7. AMBIENT NOSTALGIA SYNTHESIZER (NO EXTERNAL MP3 DEPENDENCIES)
// ============================================================================
let audioCtx = null;
let isAmbientPlaying = false;
let ambientInterval = null;

function initAmbientSound() {
  const toggleBtn = document.getElementById('ambientToggle');
  const ambientText = document.getElementById('ambientText');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isAmbientPlaying = !isAmbientPlaying;
    toggleBtn.classList.toggle('active', isAmbientPlaying);

    if (isAmbientPlaying) {
      ambientText.textContent = 'Suasana Nostalgia: Aktif';
      startAmbientChimes();
      showToast('Melodi nostalgia lembut diaktifkan 🎵', 'info');
    } else {
      ambientText.textContent = 'Suasana Nostalgia: Mati';
      stopAmbientChimes();
    }
  });
}

// Gentle pentatonic music chime sequence generator
function startAmbientChimes() {
  const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // C D E G A C Pentatonic Warmth
  function playNote() {
    if (!isAmbientPlaying || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      const freq = notes[Math.floor(Math.random() * notes.length)];
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, audioCtx.currentTime + 1.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.5);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 4.5);
    } catch (e) {
      console.warn(e);
    }
  }

  playNote();
  ambientInterval = setInterval(() => {
    playNote();
  }, 3200);
}

function stopAmbientChimes() {
  if (ambientInterval) {
    clearInterval(ambientInterval);
    ambientInterval = null;
  }
}

// Soft paper rustle sound effect on envelope opening
function playPaperRustleSound() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContextClass();
    const bufferSize = ctx.sampleRate * 0.35;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
  } catch (e) {
    // silently ignore if audio autoplay restriction
  }
}

// ============================================================================
// 8. GLOBAL UTILITIES (SEARCH, TOAST, MODAL CLOSE)
// ============================================================================
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const btnResetFilter = document.getElementById('btnResetFilter');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value;
      if (clearBtn) {
        clearBtn.classList.toggle('show', appState.searchQuery.length > 0);
      }
      renderGallery();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      appState.searchQuery = '';
      clearBtn.classList.remove('show');
      renderGallery();
      searchInput.focus();
    });
  }

  if (btnResetFilter) {
    btnResetFilter.addEventListener('click', () => {
      appState.activeFilter = 'all';
      appState.searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (clearBtn) clearBtn.classList.remove('show');
      renderFilterChips();
      renderGallery();
    });
  }
}

function initModals() {
  const closeDetail = document.getElementById('closeDetailModal');
  const detailModal = document.getElementById('detailModal');

  if (closeDetail) closeDetail.addEventListener('click', closeDetailModal);
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeDetailModal();
    });
  }

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
      const loginModal = document.getElementById('loginModal');
      if (loginModal && loginModal.classList.contains('active')) {
        loginModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      const adminModal = document.getElementById('adminModal');
      if (adminModal && adminModal.classList.contains('active')) {
        adminModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      const writeModal = document.getElementById('writeMessageModal');
      if (writeModal && writeModal.classList.contains('active')) {
        writeModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
}

function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });

  drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  });
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.remove('open');
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-solid fa-circle-info';
  if (type === 'success') icon = 'fa-solid fa-circle-check';
  if (type === 'error') icon = 'fa-solid fa-circle-exclamation';

  toast.innerHTML = `<i class="${icon}"></i> <span>${escapeHTML(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDateIndonesian(dateStr) {
  if (!dateStr) return '';
  try {
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const day = parseInt(parts[2], 10);
      const month = months[parseInt(parts[1], 10) - 1];
      const year = parts[0];
      return `${day} ${month} ${year}`;
    }
    return dateStr;
  } catch (e) {
    return dateStr;
  }
}

// ============================================================================
// 9. APPLICATION INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initData();
  initFirebase();
  initEnvelopeLogin();
  initAdminDashboard();
  initWriteMessageModal();
  initSearch();
  initModals();
  initMobileDrawer();
  initAmbientSound();
});
