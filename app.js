// ============================================
// Instagram Analyzer PRO v2.0
// Versión optimizada para 100M+ cuentas
// Con temas claro/oscuro y 3 idiomas
// ============================================

// ===== CONFIGURACIÓN GLOBAL =====
const CONFIG = {
    maxFiles: 2,
    allowedTypes: ['.json'],
    analysisSteps: 4,
    chartColors: ['#E1306C', '#00D95F', '#2E86FF', '#FFC107', '#9B59B6'],
    exportFormats: ['txt', 'html', 'json'],
    
    // Performance
    virtualItemsPerPage: 100,
    maxMemoryUsage: 500 * 1024 * 1024, // 500MB
    workerEnabled: typeof Worker !== 'undefined',
    
    // Cache
    cacheDuration: 60 * 60 * 1000, // 1 hora
    maxCacheSize: 50 * 1024 * 1024 // 50MB
};

// ===== TRADUCCIONES (3 IDIOMAS) =====
const TRANSLATIONS = {
    es: {
        // UI General
        appTitle: "Instagram Analyzer PRO v2.0",
        tagline: "Analiza 100M+ cuentas • 100% Privado • Temas Claro/Oscuro",
        analyze: "Analizar",
        export: "Exportar",
        loading: "Cargando...",
        success: "Éxito",
        error: "Error",
        warning: "Advertencia",
        info: "Información",
        
        // Header
        changeLanguage: "Cambiar idioma",
        changeTheme: "Cambiar tema claro/oscuro",
        privacyBadge: "100% Privado",
        
        // Tutorial
        tutorialTitle: "Guía Completa Paso a Paso 2024",
        showHideTutorial: "Mostrar/Ocultar Guía",
        step1: "Descarga tus datos de Instagram",
        step2: "Encuentra y extrae los archivos",
        step3: "Sube los archivos aquí",
        step4: "Inicia el análisis",
        step5: "Exporta resultados",
        
        // FAQ
        faqTitle: "Preguntas Frecuentes Extendidas",
        faq1Question: "¿Instagram puede banearme por usar esto?",
        faq2Question: "¿Los datos están actualizados?",
        faq3Question: "¿Funciona en el teléfono?",
        faq4Question: "¿Puede manejar 100 millones de seguidores?",
        faq5Question: "¿Qué hago si me aparece error de formato JSON?",
        
        // File Upload
        uploadTitle: "Sube tus archivos",
        followersFile: "followers.json",
        followingFile: "following.json",
        dragDrop: "Arrastra o selecciona archivos",
        clearFiles: "Limpiar archivos",
        processingLocal: "Tus datos nunca salen de tu navegador",
        
        // Analysis
        analysisTitle: "Analiza tus datos",
        startAnalysis: "Iniciar análisis",
        analyzing: "Analizando tus datos...",
        step1Complete: "Archivos cargados",
        step2InProgress: "Extrayendo usuarios",
        step3InProgress: "Comparando listas",
        step4InProgress: "Generando resultados",
        
        // Results
        resultsTitle: "Resultados del análisis",
        totalFollowers: "Total seguidores",
        totalFollowing: "Total que sigues",
        difference: "Diferencia",
        notFollowingBack: "No te siguen",
        notFollowedBack: "No sigues",
        mutual: "Mutuales",
        followBackRate: "Seguidores que sigues",
        
        // Tabs
        tabNotFollowing: "No te siguen",
        tabNotFollowed: "No sigues",
        tabMutual: "Mutuales",
        searchPlaceholder: "Buscar usuario...",
        selectedCount: "seleccionados",
        selectAll: "Todos",
        selectNone: "Ninguno",
        copy: "Copiar",
        downloadTxt: "TXT",
        downloadHtml: "HTML",
        exportSelected: "Exportar selección",
        exportAll: "Exportar todo",
        exportZip: "ZIP completo",
        
        // Insights
        insightsTitle: "Recomendaciones",
        
        // Footer
        footerTagline: "Herramienta profesional para la comunidad",
        privacy: "Privacidad",
        terms: "Términos",
        contact: "Contacto",
        tutorial: "Tutorial",
        copyright: "© 2024 Instagram Analyzer PRO. Todos los derechos reservados.",
        version: "Versión 2.0 | Optimizado para 100M+ cuentas",
        
        // Modals
        privacyTitle: "Política de Privacidad",
        termsTitle: "Términos de Uso",
        contactTitle: "Contacto",
        
        // Notifications
        fileUploadSuccess: "Archivo cargado exitosamente",
        fileUploadError: "Error al cargar archivo",
        analysisComplete: "Análisis completado exitosamente",
        exportComplete: "Exportación completada",
        copySuccess: "Copiado al portapapeles",
        clearSuccess: "Datos limpiados",
        
        // Errors
        invalidFile: "Archivo no válido",
        missingFiles: "Faltan archivos para el análisis",
        emptyFiles: "Los archivos están vacíos",
        fileTooLarge: "Archivo demasiado grande",
        memoryLimit: "Límite de memoria alcanzado",
        
        // Empty States
        emptyNotFollowing: "¡Perfecto! Todas las personas que sigues te siguen de vuelta.",
        emptyNotFollowed: "¡Excelente! Sigues a todas las personas que te siguen.",
        emptyMutual: "No hay conexiones mutuas en este momento."
    },
    
    en: {
        appTitle: "Instagram Analyzer PRO v2.0",
        tagline: "Analyze 100M+ accounts • 100% Private • Light/Dark Themes",
        analyze: "Analyze",
        export: "Export",
        loading: "Loading...",
        success: "Success",
        error: "Error",
        warning: "Warning",
        info: "Info",
        
        changeLanguage: "Change language",
        changeTheme: "Toggle light/dark theme",
        privacyBadge: "100% Private",
        
        tutorialTitle: "Complete Step-by-Step Guide 2024",
        showHideTutorial: "Show/Hide Guide",
        step1: "Download your Instagram data",
        step2: "Find and extract files",
        step3: "Upload files here",
        step4: "Start analysis",
        step5: "Export results",
        
        faqTitle: "Extended FAQs",
        faq1Question: "Can Instagram ban me for using this?",
        faq2Question: "Is the data up to date?",
        faq3Question: "Does it work on mobile?",
        faq4Question: "Can it handle 100 million followers?",
        faq5Question: "What if I get JSON format error?",
        
        uploadTitle: "Upload your files",
        followersFile: "followers.json",
        followingFile: "following.json",
        dragDrop: "Drag or select files",
        clearFiles: "Clear files",
        processingLocal: "Your data never leaves your browser",
        
        analysisTitle: "Analyze your data",
        startAnalysis: "Start analysis",
        analyzing: "Analyzing your data...",
        step1Complete: "Files loaded",
        step2InProgress: "Extracting users",
        step3InProgress: "Comparing lists",
        step4InProgress: "Generating results",
        
        resultsTitle: "Analysis Results",
        totalFollowers: "Total followers",
        totalFollowing: "Total following",
        difference: "Difference",
        notFollowingBack: "Not following back",
        notFollowedBack: "You don't follow",
        mutual: "Mutual",
        followBackRate: "Followers you follow back",
        
        tabNotFollowing: "Not following back",
        tabNotFollowed: "You don't follow",
        tabMutual: "Mutual",
        searchPlaceholder: "Search user...",
        selectedCount: "selected",
        selectAll: "All",
        selectNone: "None",
        copy: "Copy",
        downloadTxt: "TXT",
        downloadHtml: "HTML",
        exportSelected: "Export selected",
        exportAll: "Export all",
        exportZip: "Complete ZIP",
        
        insightsTitle: "Recommendations",
        
        footerTagline: "Professional tool for the community",
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
        tutorial: "Tutorial",
        copyright: "© 2024 Instagram Analyzer PRO. All rights reserved.",
        version: "Version 2.0 | Optimized for 100M+ accounts",
        
        privacyTitle: "Privacy Policy",
        termsTitle: "Terms of Use",
        contactTitle: "Contact",
        
        fileUploadSuccess: "File uploaded successfully",
        fileUploadError: "Error uploading file",
        analysisComplete: "Analysis completed successfully",
        exportComplete: "Export completed",
        copySuccess: "Copied to clipboard",
        clearSuccess: "Data cleared",
        
        invalidFile: "Invalid file",
        missingFiles: "Missing files for analysis",
        emptyFiles: "Files are empty",
        fileTooLarge: "File too large",
        memoryLimit: "Memory limit reached",
        
        emptyNotFollowing: "Perfect! All people you follow follow you back.",
        emptyNotFollowed: "Excellent! You follow all people who follow you.",
        emptyMutual: "No mutual connections at this time."
    },
    
    pt: {
        appTitle: "Instagram Analyzer PRO v2.0",
        tagline: "Analise 100M+ contas • 100% Privado • Temas Claro/Escuro",
        analyze: "Analisar",
        export: "Exportar",
        loading: "Carregando...",
        success: "Sucesso",
        error: "Erro",
        warning: "Aviso",
        info: "Informação",
        
        changeLanguage: "Mudar idioma",
        changeTheme: "Alternar tema claro/escuro",
        privacyBadge: "100% Privado",
        
        tutorialTitle: "Guia Completa Passo a Passo 2024",
        showHideTutorial: "Mostrar/Ocultar Guia",
        step1: "Baixe seus dados do Instagram",
        step2: "Encontre e extraia os arquivos",
        step3: "Carregue os arquivos aqui",
        step4: "Inicie a análise",
        step5: "Exporte resultados",
        
        faqTitle: "Perguntas Frequentes Extendidas",
        faq1Question: "O Instagram pode me banir por usar isso?",
        faq2Question: "Os dados estão atualizados?",
        faq3Question: "Funciona no celular?",
        faq4Question: "Pode lidar com 100 milhões de seguidores?",
        faq5Question: "E se eu receber erro de formato JSON?",
        
        uploadTitle: "Carregue seus arquivos",
        followersFile: "followers.json",
        followingFile: "following.json",
        dragDrop: "Arraste ou selecione arquivos",
        clearFiles: "Limpar arquivos",
        processingLocal: "Seus dados nunca saem do seu navegador",
        
        analysisTitle: "Analise seus dados",
        startAnalysis: "Iniciar análise",
        analyzing: "Analisando seus dados...",
        step1Complete: "Arquivos carregados",
        step2InProgress: "Extraindo usuários",
        step3InProgress: "Comparando listas",
        step4InProgress: "Gerando resultados",
        
        resultsTitle: "Resultados da Análise",
        totalFollowers: "Total seguidores",
        totalFollowing: "Total seguindo",
        difference: "Diferença",
        notFollowingBack: "Não te seguem",
        notFollowedBack: "Você não segue",
        mutual: "Mútuos",
        followBackRate: "Seguidores que você segue",
        
        tabNotFollowing: "Não te seguem",
        tabNotFollowed: "Você não segue",
        tabMutual: "Mútuos",
        searchPlaceholder: "Buscar usuário...",
        selectedCount: "selecionados",
        selectAll: "Todos",
        selectNone: "Nenhum",
        copy: "Copiar",
        downloadTxt: "TXT",
        downloadHtml: "HTML",
        exportSelected: "Exportar seleção",
        exportAll: "Exportar tudo",
        exportZip: "ZIP completo",
        
        insightsTitle: "Recomendações",
        
        footerTagline: "Ferramenta profissional para a comunidade",
        privacy: "Privacidade",
        terms: "Termos",
        contact: "Contato",
        tutorial: "Tutorial",
        copyright: "© 2024 Instagram Analyzer PRO. Todos os direitos reservados.",
        version: "Versão 2.0 | Otimizado para 100M+ contas",
        
        privacyTitle: "Política de Privacidade",
        termsTitle: "Termos de Uso",
        contactTitle: "Contato",
        
        fileUploadSuccess: "Arquivo carregado com sucesso",
        fileUploadError: "Erro ao carregar arquivo",
        analysisComplete: "Análise concluída com sucesso",
        exportComplete: "Exportação concluída",
        copySuccess: "Copiado para a área de transferência",
        clearSuccess: "Dados limpos",
        
        invalidFile: "Arquivo inválido",
        missingFiles: "Arquivos faltando para análise",
        emptyFiles: "Arquivos estão vazios",
        fileTooLarge: "Arquivo muito grande",
        memoryLimit: "Limite de memória alcançado",
        
        emptyNotFollowing: "Perfeito! Todas as pessoas que você segue te seguem de volta.",
        emptyNotFollowed: "Excelente! Você segue todas as pessoas que te seguem.",
        emptyMutual: "Sem conexões mútuas no momento."
    }
};

// ===== ESTADO GLOBAL OPTIMIZADO =====
const STATE = {
    files: {
        followers: null,
        following: null
    },
    analysis: {
        inProgress: false,
        step: 0,
        results: null,
        stats: null,
        worker: null,
        cancelToken: false
    },
    ui: {
        currentLanguage: localStorage.getItem('preferredLanguage') || 'es',
        currentTheme: localStorage.getItem('preferredTheme') || 'dark',
        currentTab: 'notFollowingBack',
        selectedUsers: {
            notFollowingBack: new Set(),
            notFollowedBack: new Set(),
            mutual: new Set()
        },
        searchQueries: {
            notFollowingBack: '',
            notFollowedBack: '',
            mutual: ''
        },
        virtualScroll: {
            notFollowingBack: { start: 0, end: 100 },
            notFollowedBack: { start: 0, end: 100 },
            mutual: { start: 0, end: 100 }
        }
    },
    cache: {
        lastAnalysis: null,
        timestamp: null
    }
};

// ===== ELEMENTOS DEL DOM =====
const DOM = {
    // Header
    themeToggle: document.getElementById('themeToggle'),
    themeIcon: document.getElementById('themeIcon'),
    languageToggle: document.getElementById('languageToggle'),
    currentLang: document.getElementById('currentLang'),
    
    // Tutorial
    toggleTutorial: document.getElementById('toggleTutorial'),
    tutorialContent: document.getElementById('tutorialContent'),
    tutorialToggleText: document.querySelector('.tutorial-toggle-text'),
    
    // File inputs
    followersFile: document.getElementById('followersFile'),
    followingFile: document.getElementById('followingFile'),
    
    // File status
    followersStatus: document.getElementById('followersStatus'),
    followingStatus: document.getElementById('followingStatus'),
    
    // Actions
    clearFilesBtn: document.getElementById('clearFilesBtn'),
    analyzeBtn: document.getElementById('analyzeBtn'),
    exportAllBtn: document.getElementById('exportAllBtn'),
    exportZipBtn: document.getElementById('exportZipBtn'),
    
    // Sections
    analyzeSection: document.getElementById('analyzeSection'),
    resultsSection: document.getElementById('resultsSection'),
    filesSummary: document.getElementById('filesSummary'),
    
    // Loading
    loadingContainer: document.getElementById('loadingContainer'),
    progressFill: document.getElementById('progressFill'),
    
    // Stats
    totalFollowers: document.getElementById('totalFollowers'),
    totalFollowing: document.getElementById('totalFollowing'),
    differenceValue: document.getElementById('differenceValue'),
    differenceTrend: document.getElementById('differenceTrend'),
    notFollowingBack: document.getElementById('notFollowingBack'),
    notFollowedBack: document.getElementById('notFollowedBack'),
    mutualCount: document.getElementById('mutualCount'),
    followBackRate: document.getElementById('followBackRate'),
    
    // Chart
    resultsChart: document.getElementById('resultsChart'),
    chartTotal: document.getElementById('chartTotal'),
    legend1: document.getElementById('legend1'),
    legend2: document.getElementById('legend2'),
    legend3: document.getElementById('legend3'),
    
    // Tabs
    tabBadge1: document.getElementById('tabBadge1'),
    tabBadge2: document.getElementById('tabBadge2'),
    tabBadge3: document.getElementById('tabBadge3'),
    
    // Lists
    listNotFollowingBack: document.getElementById('listNotFollowingBack'),
    listNotFollowedBack: document.getElementById('listNotFollowedBack'),
    listMutual: document.getElementById('listMutual'),
    
    // Empty states
    emptyTab1: document.getElementById('emptyTab1'),
    emptyTab2: document.getElementById('emptyTab2'),
    emptyTab3: document.getElementById('emptyTab3'),
    
    // Selection counters
    selectedCount1: document.getElementById('selectedCount1'),
    selectedCount2: document.getElementById('selectedCount2'),
    selectedCount3: document.getElementById('selectedCount3'),
    
    // Selection buttons
    selectAllTab1Btn: document.getElementById('selectAllTab1Btn'),
    selectAllTab2Btn: document.getElementById('selectAllTab2Btn'),
    selectAllTab3Btn: document.getElementById('selectAllTab3Btn'),
    
    // Search inputs
    searchInputs: document.querySelectorAll('.search-input'),
    
    // Export buttons
    copyTab1Btn: document.getElementById('copyTab1Btn'),
    copyTab2Btn: document.getElementById('copyTab2Btn'),
    copyTab3Btn: document.getElementById('copyTab3Btn'),
    
    downloadTab1Btn: document.getElementById('downloadTab1Btn'),
    downloadTab2Btn: document.getElementById('downloadTab2Btn'),
    downloadTab3Btn: document.getElementById('downloadTab3Btn'),
    
    downloadTab1HtmlBtn: document.getElementById('downloadTab1HtmlBtn'),
    downloadTab2HtmlBtn: document.getElementById('downloadTab2HtmlBtn'),
    downloadTab3HtmlBtn: document.getElementById('downloadTab3HtmlBtn'),
    
    exportSelectedTab1Btn: document.getElementById('exportSelectedTab1Btn'),
    exportSelectedTab2Btn: document.getElementById('exportSelectedTab2Btn'),
    exportSelectedTab3Btn: document.getElementById('exportSelectedTab3Btn'),
    
    // Insights
    insightsContent: document.getElementById('insightsContent'),
    
    // Modals
    privacyLink: document.getElementById('privacyLink'),
    termsLink: document.getElementById('termsLink'),
    contactLink: document.getElementById('contactLink'),
    tutorialLink: document.getElementById('tutorialLink'),
    privacyModal: document.getElementById('privacyModal'),
    termsModal: document.getElementById('termsModal'),
    contactModal: document.getElementById('contactModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    
    // FAQ
    faqQuestions: document.querySelectorAll('.faq-question-expanded')
};

// ===== FUNCIÓN DE TRADUCCIÓN =====
function t(key) {
    const lang = STATE.ui.currentLanguage;
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['es'][key] || key;
}

function updateAllTexts() {
    // Actualizar textos dinámicamente
    document.title = t('appTitle');
    document.querySelector('.tagline').textContent = t('tagline');
    document.querySelector('.footer-tagline').textContent = t('footerTagline');
    document.querySelector('.footer-version').textContent = t('version');
    document.querySelector('.copyright').textContent = t('copyright');
    
    // Actualizar botones
    DOM.analyzeBtn.innerHTML = `<i class="fas fa-play-circle"></i> ${t('startAnalysis')}`;
    DOM.clearFilesBtn.innerHTML = `<i class="fas fa-trash-alt"></i> ${t('clearFiles')}`;
    DOM.exportAllBtn.innerHTML = `<i class="fas fa-download"></i> ${t('exportAll')}`;
    DOM.exportZipBtn.innerHTML = `<i class="fas fa-file-archive"></i> ${t('exportZip')}`;
    
    // Actualizar placeholders
    DOM.searchInputs.forEach(input => {
        input.placeholder = t('searchPlaceholder');
    });
    
    // Actualizar idioma actual
    DOM.currentLang.textContent = STATE.ui.currentLanguage.toUpperCase();
    
    // Actualizar FAQ
    updateFAQTexts();
}

function updateFAQTexts() {
    const questions = document.querySelectorAll('.faq-question-expanded');
    if (questions.length >= 5) {
        questions[0].innerHTML = `${t('faq1Question')} <i class="fas fa-chevron-down"></i>`;
        questions[1].innerHTML = `${t('faq2Question')} <i class="fas fa-chevron-down"></i>`;
        questions[2].innerHTML = `${t('faq3Question')} <i class="fas fa-chevron-down"></i>`;
        questions[3].innerHTML = `${t('faq4Question')} <i class="fas fa-chevron-down"></i>`;
        questions[4].innerHTML = `${t('faq5Question')} <i class="fas fa-chevron-down"></i>`;
    }
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', initApp);

function initApp() {
    setupEventListeners();
    setupTabs();
    setupModals();
    setupFAQ();
    setupChart();
    setupTheme();
    setupLanguage();
    updateUI();
    setupPerformanceMonitoring();
    
    // Cargar desde cache si existe
    loadFromCache();
}

// ===== TEMA CLARO/OSCURO =====
function setupTheme() {
    const savedTheme = localStorage.getItem('preferredTheme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    STATE.ui.currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    if (STATE.ui.currentTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        DOM.themeIcon.className = 'fas fa-sun';
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        DOM.themeIcon.className = 'fas fa-moon';
    }
    
    DOM.themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    if (STATE.ui.currentTheme === 'dark') {
        STATE.ui.currentTheme = 'light';
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        DOM.themeIcon.className = 'fas fa-sun';
        localStorage.setItem('preferredTheme', 'light');
        showNotification(t('themeChangedToLight'), 'success');
    } else {
        STATE.ui.currentTheme = 'dark';
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        DOM.themeIcon.className = 'fas fa-moon';
        localStorage.setItem('preferredTheme', 'dark');
        showNotification(t('themeChangedToDark'), 'success');
    }
}

// ===== IDIOMA =====
function setupLanguage() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            setLanguage(lang);
        });
    });
    
    // Dropdown toggle
    DOM.languageToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = document.querySelector('.dropdown-content');
        dropdown.classList.toggle('show');
    });
    
    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', () => {
        document.querySelector('.dropdown-content').classList.remove('show');
    });
}

function setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
        STATE.ui.currentLanguage = lang;
        localStorage.setItem('preferredLanguage', lang);
        updateAllTexts();
        DOM.currentLang.textContent = lang.toUpperCase();
        showNotification(`${t('languageChanged')} ${lang.toUpperCase()}`, 'success');
        
        // Cerrar dropdown
        document.querySelector('.dropdown-content').classList.remove('show');
        
        // Actualizar textos de resultados si existen
        if (STATE.analysis.results) {
            updateResultsUI(STATE.analysis.results, STATE.analysis.stats);
        }
    }
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    // Tutorial toggle
    DOM.toggleTutorial.addEventListener('click', toggleTutorial);
    
    // File inputs
    DOM.followersFile.addEventListener('change', (e) => handleFileUpload(e, 'followers'));
    DOM.followingFile.addEventListener('change', (e) => handleFileUpload(e, 'following'));
    
    // Actions
    DOM.clearFilesBtn.addEventListener('click', clearAllFiles);
    DOM.analyzeBtn.addEventListener('click', startAnalysis);
    DOM.exportAllBtn.addEventListener('click', exportAllResults);
    DOM.exportZipBtn.addEventListener('click', exportAllAsZip);
    
    // Selection buttons
    DOM.selectAllTab1Btn.addEventListener('click', () => toggleSelectAll('notFollowingBack'));
    DOM.selectAllTab2Btn.addEventListener('click', () => toggleSelectAll('notFollowedBack'));
    DOM.selectAllTab3Btn.addEventListener('click', () => toggleSelectAll('mutual'));
    
    // Search inputs
    DOM.searchInputs.forEach(input => {
        input.addEventListener('input', (e) => handleSearch(e.target.dataset.tab, e.target.value));
    });
    
    // Copy buttons
    DOM.copyTab1Btn.addEventListener('click', () => copyList('notFollowingBack'));
    DOM.copyTab2Btn.addEventListener('click', () => copyList('notFollowedBack'));
    DOM.copyTab3Btn.addEventListener('click', () => copyList('mutual'));
    
    // Download TXT buttons
    DOM.downloadTab1Btn.addEventListener('click', () => downloadTXT('notFollowingBack'));
    DOM.downloadTab2Btn.addEventListener('click', () => downloadTXT('notFollowedBack'));
    DOM.downloadTab3Btn.addEventListener('click', () => downloadTXT('mutual'));
    
    // Download HTML buttons
    DOM.downloadTab1HtmlBtn.addEventListener('click', () => downloadHTML('notFollowingBack'));
    DOM.downloadTab2HtmlBtn.addEventListener('click', () => downloadHTML('notFollowedBack'));
    DOM.downloadTab3HtmlBtn.addEventListener('click', () => downloadHTML('mutual'));
    
    // Export selected buttons
    DOM.exportSelectedTab1Btn.addEventListener('click', () => exportSelectedUsers('notFollowingBack'));
    DOM.exportSelectedTab2Btn.addEventListener('click', () => exportSelectedUsers('notFollowedBack'));
    DOM.exportSelectedTab3Btn.addEventListener('click', () => exportSelectedUsers('mutual'));
    
    // Drag and drop
    setupDragAndDrop();
    
    // Performance monitoring
    window.addEventListener('beforeunload', handleBeforeUnload);
}

// ===== TUTORIAL =====
function toggleTutorial() {
    const isCollapsed = DOM.tutorialContent.classList.contains('collapsed');
    if (isCollapsed) {
        DOM.tutorialContent.classList.remove('collapsed');
        DOM.toggleTutorial.innerHTML = `<i class="fas fa-chevron-up"></i> ${t('showHideTutorial')}`;
    } else {
        DOM.tutorialContent.classList.add('collapsed');
        DOM.toggleTutorial.innerHTML = `<i class="fas fa-chevron-down"></i> ${t('showHideTutorial')}`;
    }
}

function setupFAQ() {
    DOM.faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            
            // Cerrar todas las respuestas
            document.querySelectorAll('.faq-answer-expanded').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-question-expanded').forEach(q => q.classList.remove('active'));
            
            // Abrir/cerrar esta respuesta
            if (!isOpen) {
                answer.classList.add('open');
                question.classList.add('active');
                
                // Scroll suave a la respuesta
                setTimeout(() => {
                    answer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });
}

// ===== MANEJO DE ARCHIVOS OPTIMIZADO =====
async function handleFileUpload(event, fileType) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validar tamaño para archivos enormes
    if (file.size > CONFIG.maxMemoryUsage) {
        showError(t('fileTooLarge'));
        event.target.value = '';
        return;
    }
    
    // Validar extensión
    if (!file.name.toLowerCase().endsWith('.json')) {
        showError(t('invalidFile'));
        event.target.value = '';
        return;
    }
    
    // Mostrar progreso para archivos grandes
    if (file.size > 10 * 1024 * 1024) { // > 10MB
        showNotification(t('processingLargeFile'), 'info');
    }
    
    try {
        // Leer archivo con progreso (para archivos grandes)
        const data = await readFileWithProgress(file, fileType);
        STATE.files[fileType] = { file, data, name: file.name };
        
        // Actualizar UI
        updateFileStatus(fileType, 'success', t('fileUploadSuccess'));
        updateFilesSummary();
        
        // Mostrar sección de análisis si hay archivos suficientes
        checkReadyForAnalysis();
        
        // Guardar en cache
        saveToCache();
        
    } catch (error) {
        console.error(`Error loading ${fileType}:`, error);
        showError(`${t('fileUploadError')}: ${error.message}`);
        event.target.value = '';
        STATE.files[fileType] = null;
        updateFileStatus(fileType, 'error', t('fileUploadError'));
    }
}

async function readFileWithProgress(file, fileType) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onloadstart = () => {
            // Mostrar progress bar para archivos grandes
            if (file.size > 5 * 1024 * 1024) {
                // Podríamos mostrar un progress bar aquí
            }
        };
        
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                resolve(data);
            } catch (error) {
                reject(new Error(t('invalidFile')));
            }
        };
        
        reader.onerror = function() {
            reject(new Error(t('fileUploadError')));
        };
        
        reader.readAsText(file);
    });
}

function updateFileStatus(fileType, status, message) {
    const statusElement = DOM[`${fileType}Status`];
    if (!statusElement) return;
    
    statusElement.textContent = message;
    statusElement.className = `file-status ${status}`;
    
    // Agregar icono según estado
    let icon = '';
    if (status === 'success') icon = '✓ ';
    if (status === 'error') icon = '✗ ';
    statusElement.textContent = icon + message;
}

function updateFilesSummary() {
    let html = '<div class="files-summary-grid">';
    
    if (STATE.files.followers) {
        const size = formatBytes(STATE.files.followers.file.size);
        html += `
            <div class="file-summary-item">
                <i class="fas fa-users"></i>
                <div>
                    <strong>${t('followersFile')}:</strong>
                    <span>${STATE.files.followers.name} (${size})</span>
                </div>
            </div>
        `;
    }
    
    if (STATE.files.following) {
        const size = formatBytes(STATE.files.following.file.size);
        html += `
            <div class="file-summary-item">
                <i class="fas fa-user-plus"></i>
                <div>
                    <strong>${t('followingFile')}:</strong>
                    <span>${STATE.files.following.name} (${size})</span>
                </div>
            </div>
        `;
    }
    
    html += '</div>';
    DOM.filesSummary.innerHTML = html;
    
    // Agregar estilos dinámicos si no existen
    if (!document.querySelector('#files-summary-styles')) {
        const style = document.createElement('style');
        style.id = 'files-summary-styles';
        style.textContent = `
            .files-summary-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                margin-bottom: 25px;
            }
            .file-summary-item {
                background: var(--bg-tertiary);
                border-radius: 12px;
                padding: 15px;
                display: flex;
                align-items: center;
                gap: 15px;
            }
            .file-summary-item i {
                font-size: 1.5rem;
                color: var(--primary);
            }
            .file-summary-item strong {
                display: block;
                color: var(--text-primary);
                font-size: 0.9rem;
            }
            .file-summary-item span {
                display: block;
                color: var(--text-secondary);
                font-size: 0.85rem;
                margin-top: 5px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `;
        document.head.appendChild(style);
    }
}

function checkReadyForAnalysis() {
    const ready = STATE.files.followers !== null && STATE.files.following !== null;
    
    if (ready) {
        DOM.analyzeSection.style.display = 'block';
        DOM.analyzeBtn.disabled = false;
        
        // Scroll suave a la sección de análisis
        setTimeout(() => {
            DOM.analyzeSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    } else {
        DOM.analyzeSection.style.display = 'none';
        DOM.analyzeBtn.disabled = true;
    }
}

function clearAllFiles() {
    // Cancelar análisis si está en progreso
    if (STATE.analysis.inProgress) {
        STATE.analysis.cancelToken = true;
        if (STATE.analysis.worker) {
            STATE.analysis.worker.terminate();
        }
    }
    
    // Resetear state
    STATE.files = {
        followers: null,
        following: null
    };
    
    // Resetar selección
    STATE.ui.selectedUsers = {
        notFollowingBack: new Set(),
        notFollowedBack: new Set(),
        mutual: new Set()
    };
    
    // Resetear búsquedas
    STATE.ui.searchQueries = {
        notFollowingBack: '',
        notFollowedBack: '',
        mutual: ''
    };
    
    // Resetear scroll virtual
    STATE.ui.virtualScroll = {
        notFollowingBack: { start: 0, end: 100 },
        notFollowedBack: { start: 0, end: 100 },
        mutual: { start: 0, end: 100 }
    };
    
    // Resetear inputs
    DOM.followersFile.value = '';
    DOM.followingFile.value = '';
    
    // Resetear status
    updateFileStatus('followers', '', '');
    updateFileStatus('following', '', '');
    
    // Ocultar secciones
    DOM.analyzeSection.style.display = 'none';
    DOM.resultsSection.style.display = 'none';
    DOM.filesSummary.innerHTML = '';
    
    // Resetear análisis
    STATE.analysis.inProgress = false;
    STATE.analysis.step = 0;
    STATE.analysis.results = null;
    STATE.analysis.stats = null;
    STATE.analysis.worker = null;
    STATE.analysis.cancelToken = false;
    
    // Limpiar cache
    STATE.cache.lastAnalysis = null;
    STATE.cache.timestamp = null;
    localStorage.removeItem('instagramAnalysisCache');
    
    // Limpiar gráfico
    if (window.resultsChartInstance) {
        window.resultsChartInstance.destroy();
        window.resultsChartInstance = null;
    }
    
    updateUI();
    updateSelectionCounters();
    showNotification(t('clearSuccess'), 'success');
}

// ===== DRAG AND DROP =====
function setupDragAndDrop() {
    const dropZones = document.querySelectorAll('.file-label');
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.style.borderColor = 'var(--primary)';
            zone.style.background = 'var(--bg-hover)';
        });
        
        zone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            zone.style.borderColor = '';
            zone.style.background = '';
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.style.borderColor = '';
            zone.style.background = '';
            
            const file = e.dataTransfer.files[0];
            if (!file) return;
            
            // Encontrar el input correspondiente
            const input = zone.querySelector('input[type="file"]');
            if (!input) return;
            
            // Crear un DataTransfer para asignar el archivo
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            input.files = dataTransfer.files;
            
            // Disparar el evento change
            const event = new Event('change', { bubbles: true });
            input.dispatchEvent(event);
        });
    });
}

// ===== ANÁLISIS OPTIMIZADO PARA 100M+ =====
async function startAnalysis() {
    if (STATE.analysis.inProgress) return;
    
    // Verificar memoria disponible
    if (!checkAvailableMemory()) {
        showError(t('memoryLimit'));
        return;
    }
    
    STATE.analysis.inProgress = true;
    STATE.analysis.cancelToken = false;
    DOM.analyzeBtn.disabled = true;
    DOM.loadingContainer.style.display = 'block';
    
    try {
        // Paso 1: Preparación
        await updateProgress(1, t('step1Complete'));
        
        // Paso 2: Extraer datos (optimizado para listas grandes)
        await updateProgress(2, t('step2InProgress'));
        const data = await extractDataOptimized();
        
        if (STATE.analysis.cancelToken) {
            throw new Error('Analysis cancelled');
        }
        
        // Paso 3: Comparar listas (algoritmo eficiente O(n))
        await updateProgress(3, t('step3InProgress'));
        const results = await compareListsOptimized(data);
        
        if (STATE.analysis.cancelToken) {
            throw new Error('Analysis cancelled');
        }
        
        // Paso 4: Calcular estadísticas
        await updateProgress(4, t('step4InProgress'));
        const stats = await calculateStatsOptimized(results);
        
        // Generar resultados
        await generateResultsOptimized(results, stats);
        
        // Mostrar resultados
        DOM.loadingContainer.style.display = 'none';
        DOM.resultsSection.style.display = 'block';
        DOM.resultsSection.classList.add('fade-in');
        
        // Scroll a resultados
        setTimeout(() => {
            DOM.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        // Guardar resultados
        STATE.analysis.results = results;
        STATE.analysis.stats = stats;
        
        // Guardar en cache
        saveAnalysisToCache(results, stats);
        
        // Mostrar recomendaciones
        showInsights(stats);
        
        // Actualizar gráfico
        updateChart(stats);
        
        showNotification(t('analysisComplete'), 'success');
        
    } catch (error) {
        console.error('Analysis error:', error);
        showError(`${t('error')}: ${error.message}`);
        DOM.loadingContainer.style.display = 'none';
    } finally {
        STATE.analysis.inProgress = false;
        STATE.analysis.cancelToken = false;
        updateUI();
    }
}

async function extractDataOptimized() {
    if (!STATE.files.followers || !STATE.files.following) {
        throw new Error(t('missingFiles'));
    }
    
    let followers = [];
    let following = [];
    
    // Extraer de followers.json (formato nuevo de Instagram)
    if (Array.isArray(STATE.files.followers.data)) {
        // Para listas grandes, procesar por chunks
        const chunkSize = 10000;
        for (let i = 0; i < STATE.files.followers.data.length; i += chunkSize) {
            if (STATE.analysis.cancelToken) break;
            
            const chunk = STATE.files.followers.data.slice(i, i + chunkSize);
            chunk.forEach(item => {
                const userData = item.string_list_data?.[0];
                if (userData?.value) {
                    followers.push({
                        username: sanitizeText(userData.value),
                        link: sanitizeURL(userData.href || '')
                    });
                }
            });
            
            // Actualizar progreso
            if (i % 50000 === 0) {
                await sleep(0); // Yield para UI
            }
        }
    }
    
    // Extraer de following.json
    if (STATE.files.following.data.relationships_following) {
        const chunkSize = 10000;
        const data = STATE.files.following.data.relationships_following;
        
        for (let i = 0; i < data.length; i += chunkSize) {
            if (STATE.analysis.cancelToken) break;
            
            const chunk = data.slice(i, i + chunkSize);
            chunk.forEach(item => {
                if (item.title) {
                    following.push({
                        username: sanitizeText(item.title),
                        link: sanitizeURL(item.string_list_data?.[0]?.href || '')
                    });
                }
            });
            
            if (i % 50000 === 0) {
                await sleep(0);
            }
        }
    }
    
    if (followers.length === 0 && following.length === 0) {
        throw new Error(t('emptyFiles'));
    }
    
    // Ordenar para búsqueda binaria
    followers.sort((a, b) => a.username.localeCompare(b.username));
    following.sort((a, b) => a.username.localeCompare(b.username));
    
    return { followers, following };
}

async function compareListsOptimized(data) {
    const { followers, following } = data;
    
    // Usar Sets para O(1) lookups
    const followerSet = new Set(followers.map(f => f.username.toLowerCase()));
    const followingSet = new Set(following.map(f => f.username.toLowerCase()));
    
    // Resultados
    const notFollowingBack = [];
    const notFollowedBack = [];
    const mutual = [];
    
    // Encontrar mutuales y no te siguen (optimizado)
    for (const user of following) {
        if (STATE.analysis.cancelToken) break;
        
        if (followerSet.has(user.username.toLowerCase())) {
            mutual.push(user);
        } else {
            notFollowingBack.push(user);
        }
        
        // Yield cada 10000 elementos para UI
        if (notFollowingBack.length % 10000 === 0) {
            await sleep(0);
        }
    }
    
    // Encontrar no sigues
    for (const user of followers) {
        if (STATE.analysis.cancelToken) break;
        
        if (!followingSet.has(user.username.toLowerCase())) {
            notFollowedBack.push(user);
        }
        
        if (notFollowedBack.length % 10000 === 0) {
            await sleep(0);
        }
    }
    
    return {
        notFollowingBack,
        notFollowedBack,
        mutual,
        allFollowers: followers,
        allFollowing: following
    };
}

async function calculateStatsOptimized(results) {
    const { notFollowingBack, notFollowedBack, mutual, allFollowers, allFollowing } = results;
    
    const totalFollowers = allFollowers.length;
    const totalFollowing = allFollowing.length;
    const difference = totalFollowing - totalFollowers;
    
    // Calcular porcentaje optimizado
    const followBackRate = totalFollowers > 0 
        ? Math.round((mutual.length / totalFollowers) * 100)
        : 0;
    
    return {
        totalFollowers,
        totalFollowing,
        difference,
        notFollowingBackCount: notFollowingBack.length,
        notFollowedBackCount: notFollowedBack.length,
        mutualCount: mutual.length,
        followBackRate
    };
}

async function generateResultsOptimized(results, stats) {
    // Actualizar estadísticas principales
    DOM.totalFollowers.textContent = formatNumber(stats.totalFollowers);
    DOM.totalFollowing.textContent = formatNumber(stats.totalFollowing);
    
    // Actualizar diferencia
    DOM.differenceValue.textContent = stats.difference > 0 ? `+${stats.difference}` : stats.difference;
    DOM.differenceValue.style.color = stats.difference > 0 ? 'var(--error)' : 
                                      stats.difference < 0 ? 'var(--success)' : 
                                      'var(--text-primary)';
    
    // Actualizar tendencia
    DOM.differenceTrend.textContent = stats.difference > 0 ? t('followingMore') : 
                                      stats.difference < 0 ? t('followersMore') : 
                                      t('equal');
    DOM.differenceTrend.className = `stat-trend ${stats.difference > 0 ? 'negative' : 
                                                    stats.difference < 0 ? 'positive' : ''}`;
    
    // Actualizar estadísticas detalladas
    DOM.notFollowingBack.textContent = formatNumber(stats.notFollowingBackCount);
    DOM.notFollowedBack.textContent = formatNumber(stats.notFollowedBackCount);
    DOM.mutualCount.textContent = formatNumber(stats.mutualCount);
    DOM.followBackRate.textContent = `${stats.followBackRate}%`;
    
    // Actualizar badges de tabs
    DOM.tabBadge1.textContent = formatNumber(stats.notFollowingBackCount);
    DOM.tabBadge2.textContent = formatNumber(stats.notFollowedBackCount);
    DOM.tabBadge3.textContent = formatNumber(stats.mutualCount);
    
    // Actualizar leyenda del gráfico
    DOM.legend1.textContent = formatNumber(stats.notFollowingBackCount);
    DOM.legend2.textContent = formatNumber(stats.notFollowedBackCount);
    DOM.legend3.textContent = formatNumber(stats.mutualCount);
    DOM.chartTotal.textContent = formatNumber(stats.notFollowingBackCount + stats.notFollowedBackCount + stats.mutualCount);
    
    // Generar listas con virtualización
    generateVirtualizedList('notFollowingBack', results.notFollowingBack);
    generateVirtualizedList('notFollowedBack', results.notFollowedBack);
    generateVirtualizedList('mutual', results.mutual);
    
    // Mostrar/ocultar estados vacíos
    DOM.emptyTab1.style.display = results.notFollowingBack.length === 0 ? 'block' : 'none';
    DOM.emptyTab2.style.display = results.notFollowedBack.length === 0 ? 'block' : 'none';
    DOM.emptyTab3.style.display = results.mutual.length === 0 ? 'block' : 'none';
    
    // Resetear selección
    STATE.ui.selectedUsers = {
        notFollowingBack: new Set(),
        notFollowedBack: new Set(),
        mutual: new Set()
    };
    
    // Actualizar contadores de selección
    updateSelectionCounters();
}

// ===== VIRTUALIZACIÓN DE LISTAS =====
function generateVirtualizedList(type, users) {
    const container = DOM[`list${type.charAt(0).toUpperCase() + type.slice(1)}`];
    if (!container || !users.length) {
        container.innerHTML = '';
        return;
    }
    
    const searchQuery = STATE.ui.searchQueries[type].toLowerCase();
    const { start, end } = STATE.ui.virtualScroll[type];
    
    // Filtrar si hay búsqueda
    let filteredUsers = users;
    if (searchQuery) {
        filteredUsers = users.filter(user => 
            user.username.toLowerCase().includes(searchQuery)
        );
    }
    
    // Slice para virtualización
    const visibleUsers = filteredUsers.slice(start, Math.min(end, filteredUsers.length));
    
    // Generar HTML
    let html = '';
    visibleUsers.forEach((user, index) => {
        const globalIndex = start + index;
        const firstLetter = user.username.charAt(0).toUpperCase();
        const color = `hsl(${globalIndex * 137.508}, 70%, 60%)`;
        const link = user.link.includes('instagram.com') ? user.link : `https://instagram.com/${user.username}`;
        const isSelected = STATE.ui.selectedUsers[type].has(user.username);
        
        html += `
            <div class="user-item fade-in ${isSelected ? 'selected' : ''}" 
                 style="animation-delay: ${index * 0.05}s"
                 data-username="${escapeHTML(user.username)}"
                 data-type="${type}"
                 data-index="${globalIndex}">
                <div class="user-item-header">
                    <input type="checkbox" class="user-checkbox" 
                           ${isSelected ? 'checked' : ''}
                           data-username="${escapeHTML(user.username)}"
                           data-type="${type}">
                    <div class="user-avatar" style="background: ${color}">${firstLetter}</div>
                    <div class="user-info">
                        <div class="username">@${escapeHTML(user.username)}</div>
                        <a href="${escapeHTML(link)}" target="_blank" class="user-link" title="${escapeHTML(link)}">
                            ${escapeHTML(link.replace('https://', '').replace('www.', ''))}
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Agregar event listeners
    container.querySelectorAll('.user-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', handleUserSelection);
    });
    
    container.querySelectorAll('.user-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.classList.contains('user-checkbox')) {
                const checkbox = item.querySelector('.user-checkbox');
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        });
    });
}

// ===== SELECCIÓN DE USUARIOS =====
function handleUserSelection(e) {
    const checkbox = e.target;
    const username = checkbox.dataset.username;
    const type = checkbox.dataset.type;
    
    if (checkbox.checked) {
        STATE.ui.selectedUsers[type].add(username);
        checkbox.closest('.user-item').classList.add('selected');
    } else {
        STATE.ui.selectedUsers[type].delete(username);
        checkbox.closest('.user-item').classList.remove('selected');
    }
    
    updateSelectionCounters();
}

function toggleSelectAll(type) {
    if (!STATE.analysis.results) return;
    
    const list = STATE.analysis.results[type];
    const allUsernames = list.map(user => user.username);
    const currentlySelected = STATE.ui.selectedUsers[type];
    
    // Determinar si debemos seleccionar todos o ninguno
    const shouldSelectAll = currentlySelected.size < allUsernames.length;
    
    if (shouldSelectAll) {
        // Seleccionar todos
        allUsernames.forEach(username => {
            STATE.ui.selectedUsers[type].add(username);
        });
        DOM[`selectAllTab${type === 'notFollowingBack' ? '1' : type === 'notFollowedBack' ? '2' : '3'}Btn`]
            .innerHTML = `<i class="fas fa-check-square"></i> ${t('selectNone')}`;
    } else {
        // Deseleccionar todos
        STATE.ui.selectedUsers[type].clear();
        DOM[`selectAllTab${type === 'notFollowingBack' ? '1' : type === 'notFollowedBack' ? '2' : '3'}Btn`]
            .innerHTML = `<i class="far fa-square"></i> ${t('selectAll')}`;
    }
    
    // Regenerar la lista
    generateVirtualizedList(type, list);
    updateSelectionCounters();
}

function updateSelectionCounters() {
    DOM.selectedCount1.textContent = `${STATE.ui.selectedUsers.notFollowingBack.size} ${t('selectedCount')}`;
    DOM.selectedCount2.textContent = `${STATE.ui.selectedUsers.notFollowedBack.size} ${t('selectedCount')}`;
    DOM.selectedCount3.textContent = `${STATE.ui.selectedUsers.mutual.size} ${t('selectedCount')}`;
}

function handleSearch(type, query) {
    STATE.ui.searchQueries[type] = query;
    STATE.ui.virtualScroll[type] = { start: 0, end: 100 };
    
    // Regenerar la lista filtrada
    if (STATE.analysis.results) {
        generateVirtualizedList(type, STATE.analysis.results[type]);
    }
}

// ===== GRÁFICO =====
function setupChart() {
    const ctx = DOM.resultsChart.getContext('2d');
    window.resultsChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [t('notFollowingBack'), t('notFollowedBack'), t('mutual')],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: CONFIG.chartColors,
                borderWidth: 2,
                borderColor: 'var(--bg-primary)',
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = total > 0 ? Math.round((value / total) * 100) : 0;
                            return `${label}: ${formatNumber(value)} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

function updateChart(stats) {
    if (!window.resultsChartInstance) return;
    
    window.resultsChartInstance.data.datasets[0].data = [
        stats.notFollowingBackCount,
        stats.notFollowedBackCount,
        stats.mutualCount
    ];
    window.resultsChartInstance.update();
}

// ===== INSIGHTS =====
function showInsights(stats) {
    let insights = [];
    
    // Insight 1: Diferencia general
    if (stats.difference > 50) {
        insights.push({
            type: 'warning',
            icon: 'fa-user-plus',
            title: t('followingManyMore'),
            content: t('followingManyMoreDesc').replace('{difference}', stats.difference)
        });
    } else if (stats.difference < -50) {
        insights.push({
            type: 'positive',
            icon: 'fa-user-friends',
            title: t('moreFollowers'),
            content: t('moreFollowersDesc').replace('{difference}', -stats.difference)
        });
    } else {
        insights.push({
            type: 'positive',
            icon: 'fa-balance-scale',
            title: t('balancedRelationship'),
            content: t('balancedRelationshipDesc')
        });
    }
    
    // Insight 2: Porcentaje de seguimiento
    if (stats.followBackRate < 50) {
        insights.push({
            type: 'warning',
            icon: 'fa-heart-broken',
            title: t('lowFollowBack'),
            content: t('lowFollowBackDesc').replace('{rate}', stats.followBackRate)
        });
    } else if (stats.followBackRate > 80) {
        insights.push({
            type: 'positive',
            icon: 'fa-heart',
            title: t('highFollowBack'),
            content: t('highFollowBackDesc').replace('{rate}', stats.followBackRate)
        });
    }
    
    // Insight 3: Personas que no te siguen
    if (stats.notFollowingBackCount > 100) {
        insights.push({
            type: 'warning',
            icon: 'fa-user-times',
            title: t('manyNotFollowing'),
            content: t('manyNotFollowingDesc').replace('{count}', formatNumber(stats.notFollowingBackCount))
        });
    }
    
    // Insight 4: Personas que tú no sigues
    if (stats.notFollowedBackCount > 100) {
        insights.push({
            type: 'positive',
            icon: 'fa-user-check',
            title: t('manyNotFollowed'),
            content: t('manyNotFollowedDesc').replace('{count}', formatNumber(stats.notFollowedBackCount))
        });
    }
    
    // Generar HTML de insights
    let html = '';
    insights.forEach(insight => {
        html += `
            <div class="insight-item ${insight.type}">
                <i class="fas ${insight.icon}"></i>
                <h4>${insight.title}</h4>
                <p>${insight.content}</p>
            </div>
        `;
    });
    
    DOM.insightsContent.innerHTML = html || `<p>${t('noSpecificRecommendations')}</p>`;
}

// ===== EXPORTACIÓN =====
function getSelectedUsers(type) {
    if (!STATE.analysis.results) return [];
    
    const allUsers = STATE.analysis.results[type];
    const selectedUsernames = STATE.ui.selectedUsers[type];
    
    // Si hay búsqueda activa, filtrar primero
    const searchQuery = STATE.ui.searchQueries[type].toLowerCase();
    let filteredUsers = allUsers;
    if (searchQuery) {
        filteredUsers = allUsers.filter(user => 
            user.username.toLowerCase().includes(searchQuery)
        );
    }
    
    return selectedUsernames.size > 0 ?
        filteredUsers.filter(user => selectedUsernames.has(user.username)) :
        filteredUsers;
}

async function copyList(type) {
    const users = getSelectedUsers(type);
    if (users.length === 0) {
        showNotification(t('noDataToCopy'), 'warning');
        return;
    }
    
    const text = users.map(user => 
        `${user.username}: ${user.link.includes('instagram.com') ? user.link : `https://instagram.com/${user.username}`}`
    ).join('\n\n');
    
    try {
        await copyToClipboard(text);
        showNotification(`${formatNumber(users.length)} ${t('usersCopied')}`, 'success');
    } catch (err) {
        showError(`${t('copyError')}: ${err.message}`);
    }
}

function downloadTXT(type) {
    const users = getSelectedUsers(type);
    if (users.length === 0) {
        showNotification(t('noDataToDownload'), 'warning');
        return;
    }
    
    const filenames = {
        notFollowingBack: 'instagram_not_following_back',
        notFollowedBack: 'instagram_not_followed_back',
        mutual: 'instagram_mutual'
    };
    
    const content = users.map(user => 
        `${user.username}: ${user.link.includes('instagram.com') ? user.link : `https://instagram.com/${user.username}`}`
    ).join('\n\n');
    
    downloadFile(content, `${filenames[type]}_${getDateString()}.txt`, 'text/plain');
    showNotification(`${t('txtFileDownloaded')} (${formatNumber(users.length)} ${t('users')})`, 'success');
}

function downloadHTML(type) {
    const users = getSelectedUsers(type);
    if (users.length === 0) {
        showNotification(t('noDataToExport'), 'warning');
        return;
    }
    
    const titles = {
        notFollowingBack: t('notFollowingBackTitle'),
        notFollowedBack: t('notFollowedBackTitle'),
        mutual: t('mutualTitle')
    };
    
    let html = `
<!DOCTYPE html>
<html lang="${STATE.ui.currentLanguage}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Analysis - ${titles[type]}</title>
    <style>
        body {
            font-family: 'Inter', -apple-system, sans-serif;
            background: ${STATE.ui.currentTheme === 'dark' ? '#0F0F0F' : '#FFFFFF'};
            color: ${STATE.ui.currentTheme === 'dark' ? '#FFFFFF' : '#121212'};
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px;
            background: linear-gradient(45deg, #405DE6, #E1306C, #FFDC80);
            border-radius: 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 2rem;
            background: white;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-bottom: 30px;
        }
        .stat-card {
            background: ${STATE.ui.currentTheme === 'dark' ? '#252525' : '#F5F5F5'};
            padding: 20px;
            border-radius: 12px;
            text-align: center;
        }
        .stat-value {
            font-size: 1.8rem;
            font-weight: 700;
            color: ${STATE.ui.currentTheme === 'dark' ? '#FFFFFF' : '#121212'};
        }
        .stat-label {
            font-size: 0.9rem;
            color: ${STATE.ui.currentTheme === 'dark' ? '#B0B0B0' : '#555555'};
            margin-top: 5px;
        }
        .users-table {
            width: 100%;
            border-collapse: collapse;
            background: ${STATE.ui.currentTheme === 'dark' ? '#1A1A1A' : '#FAFAFA'};
            border-radius: 12px;
            overflow: hidden;
        }
        .users-table th {
            background: ${STATE.ui.currentTheme === 'dark' ? '#252525' : '#E0E0E0'};
            padding: 15px;
            text-align: left;
            color: ${STATE.ui.currentTheme === 'dark' ? '#FFFFFF' : '#121212'};
            font-weight: 600;
            border-bottom: 2px solid #E1306C;
        }
        .users-table td {
            padding: 12px 15px;
            border-bottom: 1px solid ${STATE.ui.currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
            color: ${STATE.ui.currentTheme === 'dark' ? '#B0B0B0' : '#555555'};
        }
        .users-table tr:hover {
            background: rgba(225, 48, 108, 0.1);
        }
        .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 700;
            font-size: 1rem;
            margin-right: 10px;
        }
        .user-cell {
            display: flex;
            align-items: center;
        }
        .username {
            font-weight: 600;
            color: ${STATE.ui.currentTheme === 'dark' ? '#FFFFFF' : '#121212'};
        }
        .link {
            color: #2E86FF;
            text-decoration: none;
        }
        .link:hover {
            text-decoration: underline;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            color: ${STATE.ui.currentTheme === 'dark' ? '#808080' : '#777777'};
            font-size: 0.9rem;
            padding-top: 20px;
            border-top: 1px solid ${STATE.ui.currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Instagram Analysis - ${titles[type]}</h1>
            <p>${new Date().toLocaleDateString(STATE.ui.currentLanguage === 'es' ? 'es-ES' : 
                STATE.ui.currentLanguage === 'pt' ? 'pt-BR' : 'en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</p>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-value">${formatNumber(users.length)}</div>
                <div class="stat-label">${t('totalUsers')}</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${formatNumber(STATE.analysis.stats.totalFollowers)}</div>
                <div class="stat-label">${t('totalFollowers')}</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${formatNumber(STATE.analysis.stats.totalFollowing)}</div>
                <div class="stat-label">${t('totalFollowing')}</div>
            </div>
        </div>
        
        <table class="users-table">
            <thead>
                <tr>
                    <th>${t('user')}</th>
                    <th>${t('instagramLink')}</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    users.forEach((user, index) => {
        const firstLetter = user.username.charAt(0).toUpperCase();
        const color = `hsl(${index * 137.508}, 70%, 60%)`;
        const link = user.link.includes('instagram.com') ? user.link : `https://instagram.com/${user.username}`;
        
        html += `
                <tr>
                    <td>
                        <div class="user-cell">
                            <div class="avatar" style="background: ${color}">${firstLetter}</div>
                            <div>
                                <div class="username">@${escapeHTML(user.username)}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <a href="${escapeHTML(link)}" class="link" target="_blank">${escapeHTML(link)}</a>
                    </td>
                </tr>
        `;
    });
    
    html += `
            </tbody>
        </table>
        
        <div class="footer">
            <p>${t('generatedWith')} Instagram Analyzer PRO v2.0</p>
            <p>${t('allDataProcessedLocally')} • 100% ${t('private')}</p>
        </div>
    </div>
</body>
</html>
    `;
    
    downloadFile(html, `instagram_${type}_${getDateString()}.html`, 'text/html');
    showNotification(`${t('htmlFileDownloaded')} (${formatNumber(users.length)} ${t('users')})`, 'success');
}

function exportSelectedUsers(type) {
    const users = getSelectedUsers(type);
    if (users.length === 0) {
        showNotification(t('noUsersSelected'), 'warning');
        return;
    }
    
    // Crear un ZIP con ambos formatos
    const zip = new JSZip();
    const dateStr = getDateString();
    
    // Agregar archivo TXT
    const txtContent = users.map(user => 
        `${user.username}: ${user.link.includes('instagram.com') ? user.link : `https://instagram.com/${user.username}`}`
    ).join('\n\n');
    zip.file(`instagram_${type}_${dateStr}.txt`, txtContent);
    
    // Agregar archivo HTML
    const htmlContent = generateExportHTML(type, users);
    zip.file(`instagram_${type}_${dateStr}.html`, htmlContent);
    
    // Agregar archivo JSON
    const jsonContent = JSON.stringify(users, null, 2);
    zip.file(`instagram_${type}_${dateStr}.json`, jsonContent);
    
    // Generar y descargar ZIP
    zip.generateAsync({ type: 'blob' })
        .then(content => {
            downloadFile(content, `instagram_${type}_selected_${dateStr}.zip`, 'application/zip');
            showNotification(`${t('zipDownloaded')} ${formatNumber(users.length)} ${t('selectedUsers')}`, 'success');
        })
        .catch(err => {
            showError(`${t('zipError')}: ${err.message}`);
        });
}

function exportAllResults() {
    if (!STATE.analysis.results) return;
    
    const { notFollowingBack, notFollowedBack, mutual } = STATE.analysis.results;
    const allContent = `
=== ${t('peopleYouFollowNotFollowBack')} ===

${notFollowingBack.map(user => 
    `${user.username}: ${user.link.includes('instagram.com') ? user.link : `https://instagram.com/${user.username}`}`
).join('\n\n')}

=== ${t('peopleFollowYouNotFollow')} ===

${notFollowedBack.map(user => 
    `${user.username}: ${user.link.includes('instagram.com') ? user.link : `https://instagram.com/${user.username}`}`
).join('\n\n')}

=== ${t('mutualConnections')} ===

${mutual.map(user => 
    `${user.username}: ${user.link.includes('instagram.com') ? user.link : `https://instagram.com/${user.username}`}`
).join('\n\n')}

=== ${t('statistics')} ===
${t('date')}: ${new Date().toLocaleDateString()}
${t('totalFollowers')}: ${formatNumber(STATE.analysis.stats.totalFollowers)}
${t('totalFollowing')}: ${formatNumber(STATE.analysis.stats.totalFollowing)}
${t('difference')}: ${STATE.analysis.stats.difference}
${t('notFollowingBack')}: ${formatNumber(STATE.analysis.stats.notFollowingBackCount)}
${t('notFollowedBack')}: ${formatNumber(STATE.analysis.stats.notFollowedBackCount)}
${t('mutual')}: ${formatNumber(STATE.analysis.stats.mutualCount)}
${t('followBackRate')}: ${STATE.analysis.stats.followBackRate}%
    `;
    
    downloadFile(allContent, `instagram_analysis_complete_${getDateString()}.txt`, 'text/plain');
    showNotification(t('completeExportDownloaded'), 'success');
}

function exportAllAsZip() {
    if (!STATE.analysis.results || !STATE.analysis.stats) return;
    
    const zip = new JSZip();
    const dateStr = getDateString();
    const { notFollowingBack, notFollowedBack, mutual } = STATE.analysis.results;
    
    // Crear carpeta principal
    const mainFolder = zip.folder(`instagram_analysis_${dateStr}`);
    
    // Agregar archivos individuales por tipo
    const types = [
        { name: 'not_following_back', data: notFollowingBack },
        { name: 'not_followed_back', data: notFollowedBack },
        { name: 'mutual', data: mutual }
    ];
    
    types.forEach(({ name, data }) => {
        if (data.length > 0) {
            // TXT
            const txtContent = data.map(user => 
                `${user.username}: ${user.link.includes('instagram.com') ? user.link : `https://instagram.com/${user.username}`}`
            ).join('\n\n');
            mainFolder.file(`${name}.txt`, txtContent);
            
            // HTML
            const htmlContent = generateExportHTML(
                name === 'not_following_back' ? 'notFollowingBack' : 
                name === 'not_followed_back' ? 'notFollowedBack' : 'mutual', 
                data
            );
            mainFolder.file(`${name}.html`, htmlContent);
            
            // JSON
            const jsonContent = JSON.stringify(data, null, 2);
            mainFolder.file(`${name}.json`, jsonContent);
        }
    });
    
    // Agregar resumen
    const summary = `
${t('instagramAnalysisSummary')}
=================================

${t('date')}: ${new Date().toLocaleDateString(STATE.ui.currentLanguage === 'es' ? 'es-ES' : 
    STATE.ui.currentLanguage === 'pt' ? 'pt-BR' : 'en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
})}

${t('mainStatistics')}
------------------------
• ${t('totalFollowers')}: ${formatNumber(STATE.analysis.stats.totalFollowers)}
• ${t('totalFollowing')}: ${formatNumber(STATE.analysis.stats.totalFollowing)}
• ${t('difference')}: ${STATE.analysis.stats.difference > 0 ? '+' : ''}${STATE.analysis.stats.difference}
• ${t('notFollowingBack')}: ${formatNumber(STATE.analysis.stats.notFollowingBackCount)}
• ${t('notFollowedBack')}: ${formatNumber(STATE.analysis.stats.notFollowedBackCount)}
• ${t('mutual')}: ${formatNumber(STATE.analysis.stats.mutualCount)}
• ${t('followBackRate')}: ${STATE.analysis.stats.followBackRate}%

${t('includedFiles')}
------------------
${types.map(t => `• ${t.name}.txt - ${t('listInPlainText')}`).join('\n')}
${types.map(t => `• ${t.name}.html - ${t('listWithClickableLinks')}`).join('\n')}
${types.map(t => `• ${t.name}.json - ${t('dataInJSONFormat')}`).join('\n')}

${t('notes')}
-----
• ${t('allDataProcessedLocally')}
• ${t('noInformationShared')}
• ${t('tool')}: Instagram Analyzer PRO v2.0
    `;
    
    mainFolder.file('SUMMARY.txt', summary);
    mainFolder.file('README.txt', `
${t('instructions')}
=============

${t('thisZipContains')}

${t('availableFiles')}:
1. *.txt - ${t('simpleLists')}
2. *.html - ${t('formattedLists')}
3. *.json - ${t('structuredData')}

${t('recommendations')}:
• ${t('htmlFileMostUseful')}
• ${t('txtFileCompatible')}
• ${t('jsonFileUseful')}

${t('privacy')}:
• ${t('yourDataNeverLeft')}
• ${t('filesGeneratedLocally')}
• ${t('youCanDelete')}
    `);
    
    // Generar ZIP
    zip.generateAsync({ type: 'blob' })
        .then(content => {
            downloadFile(content, `instagram_analysis_complete_${dateStr}.zip`, 'application/zip');
            showNotification(t('completeZipDownloaded'), 'success');
        })
        .catch(err => {
            showError(`${t('zipGenerationError')}: ${err.message}`);
        });
}

function generateExportHTML(type, users) {
    const titles = {
        notFollowingBack: t('peopleYouFollowNotFollowBack'),
        notFollowedBack: t('peopleFollowYouNotFollow'),
        mutual: t('mutualConnections')
    };
    
    return `
<!DOCTYPE html>
<html lang="${STATE.ui.currentLanguage}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram Analysis - ${titles[type]}</title>
    <style>
        body { font-family: 'Inter', sans-serif; background: ${STATE.ui.currentTheme === 'dark' ? '#0F0F0F' : '#FFFFFF'}; color: ${STATE.ui.currentTheme === 'dark' ? '#FFFFFF' : '#121212'}; margin: 0; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 40px; padding: 30px; background: linear-gradient(45deg, #405DE6, #E1306C, #FFDC80); border-radius: 20px; }
        .header h1 { margin: 0; font-size: 2rem; background: white; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 30px; }
        .stat-card { background: ${STATE.ui.currentTheme === 'dark' ? '#252525' : '#F5F5F5'}; padding: 20px; border-radius: 12px; text-align: center; }
        .stat-value { font-size: 1.8rem; font-weight: 700; color: ${STATE.ui.currentTheme === 'dark' ? '#FFFFFF' : '#121212'}; }
        .stat-label { font-size: 0.9rem; color: ${STATE.ui.currentTheme === 'dark' ? '#B0B0B0' : '#555555'}; margin-top: 5px; }
        .users-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px; }
        .user-card { background: ${STATE.ui.currentTheme === 'dark' ? '#1A1A1A' : '#FAFAFA'}; border-radius: 12px; padding: 20px; display: flex; align-items: center; gap: 15px; transition: transform 0.3s; }
        .user-card:hover { transform: translateY(-5px); background: ${STATE.ui.currentTheme === 'dark' ? '#252525' : '#F0F0F0'}; }
        .avatar { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 1.2rem; }
        .user-info { flex: 1; }
        .username { font-weight: 600; color: ${STATE.ui.currentTheme === 'dark' ? '#FFFFFF' : '#121212'}; margin-bottom: 5px; }
        .link { color: #2E86FF; text-decoration: none; font-size: 0.9rem; }
        .link:hover { text-decoration: underline; }
        .footer { text-align: center; margin-top: 40px; color: ${STATE.ui.currentTheme === 'dark' ? '#808080' : '#777777'}; font-size: 0.9rem; padding-top: 20px; border-top: 1px solid ${STATE.ui.currentTheme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${titles[type]}</h1>
            <p>${formatNumber(users.length)} ${t('users')} • ${t('generatedOn')} ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <div class="stat-value">${formatNumber(users.length)}</div>
                <div class="stat-label">${t('totalUsers')}</div>
            </div>
        </div>
        
        <div class="users-list">
    ` + users.map((user, index) => {
        const firstLetter = user.username.charAt(0).toUpperCase();
        const color = `hsl(${index * 137.508}, 70%, 60%)`;
        const link = user.link.includes('instagram.com') ? user.link : `https://instagram.com/${user.username}`;
        
        return `
            <div class="user-card">
                <div class="avatar" style="background: ${color}">${firstLetter}</div>
                <div class="user-info">
                    <div class="username">@${escapeHTML(user.username)}</div>
                    <a href="${escapeHTML(link)}" class="link" target="_blank">${escapeHTML(link)}</a>
                </div>
            </div>
        `;
    }).join('') + `
        </div>
        
        <div class="footer">
            <p>${t('generatedWith')} Instagram Analyzer PRO v2.0</p>
            <p>${t('allDataProcessedLocally')} • 100% ${t('private')}</p>
        </div>
    </div>
</body>
</html>`;
}

// ===== TABS =====
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Actualizar botones
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Actualizar paneles
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(`tab${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`).classList.add('active');
            
            // Guardar estado
            STATE.ui.currentTab = tabId;
        });
    });
}

// ===== MODALES =====
function setupModals() {
    // Abrir modales
    DOM.privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('privacyModal');
    });
    
    DOM.termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('termsModal');
    });
    
    DOM.contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('contactModal');
    });
    
    DOM.tutorialLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Abrir tutorial si está cerrado
        if (DOM.tutorialContent.classList.contains('collapsed')) {
            DOM.tutorialContent.classList.remove('collapsed');
            DOM.toggleTutorial.innerHTML = '<i class="fas fa-chevron-up"></i> ' + t('showHideTutorial');
        }
        // Scroll al tutorial
        document.querySelector('.tutorial-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Cerrar modales
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.modal;
            closeModal(modalId);
        });
    });
    
    DOM.modalOverlay.addEventListener('click', () => {
        closeAllModals();
    });
    
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.style.display = 'block';
    DOM.modalOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    
    modal.style.display = 'none';
    DOM.modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    DOM.modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
}

// ===== CACHE SYSTEM =====
function saveAnalysisToCache(results, stats) {
    const cacheData = {
        results: {
            notFollowingBack: results.notFollowingBack,
            notFollowedBack: results.notFollowedBack,
            mutual: results.mutual,
            allFollowers: results.allFollowers,
            allFollowing: results.allFollowing
        },
        stats: stats,
        timestamp: Date.now(),
        files: {
            followers: STATE.files.followers ? STATE.files.followers.name : null,
            following: STATE.files.following ? STATE.files.following.name : null
        }
    };
    
    try {
        // Solo guardar datos esenciales (limitar tamaño)
        const cacheSize = JSON.stringify(cacheData).length;
        if (cacheSize < CONFIG.maxCacheSize) {
            localStorage.setItem('instagramAnalysisCache', JSON.stringify(cacheData));
            STATE.cache = cacheData;
        }
    } catch (error) {
        console.warn('Could not save to cache:', error);
    }
}

function loadFromCache() {
    try {
        const cached = localStorage.getItem('instagramAnalysisCache');
        if (!cached) return;
        
        const cacheData = JSON.parse(cached);
        const now = Date.now();
        
        // Verificar si el cache no ha expirado (1 hora)
        if (now - cacheData.timestamp < CONFIG.cacheDuration) {
            STATE.cache = cacheData;
            // Podríamos ofrecer cargar desde cache
        }
    } catch (error) {
        console.warn('Could not load from cache:', error);
    }
}

function saveToCache() {
    const cacheData = {
        files: {
            followers: STATE.files.followers,
            following: STATE.files.following
        },
        timestamp: Date.now()
    };
    
    try {
        localStorage.setItem('instagramFileCache', JSON.stringify(cacheData));
    } catch (error) {
        console.warn('Could not save files to cache:', error);
    }
}

// ===== PERFORMANCE MONITORING =====
function setupPerformanceMonitoring() {
    // Monitorear memoria cada 30 segundos
    setInterval(() => {
        if (STATE.analysis.inProgress) {
            checkAvailableMemory();
        }
    }, 30000);
}

function checkAvailableMemory() {
    if (typeof performance !== 'undefined' && performance.memory) {
        const used = performance.memory.usedJSHeapSize;
        const limit = performance.memory.jsHeapSizeLimit;
        const percent = (used / limit) * 100;
        
        if (percent > 90) {
            showWarning(t('highMemoryUsage'));
            return false;
        }
    }
    return true;
}

// ===== UTILIDADES =====
function sanitizeText(text) {
    return text.trim().replace(/[<>]/g, '');
}

function sanitizeURL(url) {
    try {
        if (url.includes('instagram.com')) {
            return url;
        }
        return `https://instagram.com/${encodeURIComponent(url)}`;
    } catch {
        return '';
    }
}

function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback para navegadores antiguos
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        return Promise.resolve();
    }
}

function downloadFile(content, filename, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Limpiar URL después de un tiempo
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function getDateString() {
    const now = new Date();
    return `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateProgress(step, message) {
    STATE.analysis.step = step;
    const percentage = (step / CONFIG.analysisSteps) * 100;
    DOM.progressFill.style.width = `${percentage}%`;
    
    // Actualizar pasos
    const steps = document.querySelectorAll('.progress-steps .step');
    steps.forEach((stepEl, index) => {
        const icon = stepEl.querySelector('i');
        if (index < step) {
            stepEl.classList.add('active');
            icon.className = 'fas fa-check';
        } else if (index === step - 1) {
            stepEl.classList.add('active');
            icon.className = 'fas fa-spinner fa-spin';
        } else {
            stepEl.classList.remove('active');
            icon.className = 'fas fa-spinner';
        }
    });
    
    // Pequeña pausa para animación
    await sleep(300);
}

function updateUI() {
    DOM.analyzeBtn.disabled = STATE.analysis.inProgress || !(STATE.files.followers && STATE.files.following);
}

// ===== NOTIFICACIONES =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function showError(message) {
    showNotification(message, 'error');
}

function showWarning(message) {
    showNotification(message, 'warning');
}

// ===== FORMATTERS =====
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace('.0', '') + 'K';
    }
    return num.toLocaleString();
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// ===== PREVENIR PÉRDIDA DE DATOS =====
function handleBeforeUnload(e) {
    if (STATE.files.followers || STATE.files.following || STATE.analysis.inProgress) {
        e.preventDefault();
        e.returnValue = t('unsavedDataWarning');
        return e.returnValue;
    }
}

// ===== INICIALIZACIÓN DE ESTILOS DINÁMICOS =====
function initDynamicStyles() {
    const styles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 12px;
            color: white;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 10000;
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-lg);
            max-width: 400px;
        }
        .notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        .notification.success {
            background: linear-gradient(135deg, var(--success), #00a085);
        }
        .notification.error {
            background: linear-gradient(135deg, var(--error), #c0392b);
        }
        .notification.warning {
            background: linear-gradient(135deg, var(--warning), #e67e22);
        }
        .notification.info {
            background: linear-gradient(135deg, var(--info), #2980b9);
        }
        .notification i {
            font-size: 1.2rem;
        }
    `;
    
    const styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
}

// Inicializar estilos dinámicos
initDynamicStyles();