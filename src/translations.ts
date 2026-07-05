/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Translation {
  title: string;
  subtitle: string;
  college1: string;
  college2: string;
  association: string;
  developer: string;
  aboutTitle: string;
  guideTitle: string;
  guideDesc: string;
  quizMode: string;
  quizActive: string;
  quizCorrect: string;
  quizIncorrect: string;
  quizIntro: string;
  quizPredictOrder: string;
  quizDropPrompt: string;
  quizStartSimulation: string;
  quizCheckResult: string;
  quizSuccessTitle: string;
  quizSuccessDesc: string;
  downloadCertificate: string;
  certificateTitle: string;
  certificateSubtitle: string;
  certificateCertify: string;
  certificateBody: string;
  certificateDate: string;
  certificateSignature: string;
  studentNamePlaceholder: string;
  studentNameLabel: string;
  isothermal: string;
  tempProgram: string;
  ovenMode: string;
  ovenTemp: string;
  initialTemp: string;
  rampRate: string;
  finalTemp: string;
  columnType: string;
  columnPolarity: string;
  carrierGas: string;
  flowRate: string;
  detector: string;
  sample: string;
  inject: string;
  injecting: string;
  reset: string;
  running: string;
  completed: string;
  resultsTitle: string;
  retentionTime: string;
  peakArea: string;
  peakHeight: string;
  resolution: string;
  compound: string;
  formula: string;
  boilingPoint: string;
  polarity: string;
  concentration: string;
  exportPdf: string;
  exportCsv: string;
  logTitle: string;
  compareTitle: string;
  compareRuns: string;
  clearLog: string;
  selectCompare: string;
  runNo: string;
  detectorSignal: string;
  timeSec: string;
  dayMode: string;
  nightMode: string;
  backToSingle: string;
  infoFid: string;
  infoTcd: string;
  infoEcd: string;
  infoNpd: string;
  infoFpd: string;
  guideCarrierGas: string;
  guideCarrierGasDesc: string;
  guideColumn: string;
  guideColumnDesc: string;
  guideOven: string;
  guideOvenDesc: string;
  guideDetector: string;
  guideDetectorDesc: string;
  guideSamples: string;
  guideSamplesDesc: string;
  noRunsYet: string;
  saveRun: string;
  savedRunsList: string;
  sideBySideCompare: string;
  normalMode: string;
}

export const translations: Record<string, Translation> = {
  ar: {
    title: "محاكي الكروماتوغرافيا الغازية الذكي",
    subtitle: "نظام تفاعلي متقدم لمحاكاة الفصل الكروماتوغرافي وتحليل الغازات",
    college1: "كلية الهندسة",
    college2: "الكلية التقنية الهندسية",
    association: "الهيئة العامة للمهندسين الكيميائيين في البصرة",
    developer: "المطور: المهندس علي سيف الدين حيدر النوفل | Dev: Eng. Ali Saif AlDeen Haider Alnawfal",
    aboutTitle: "حول المحاكي",
    guideTitle: "دليل التشغيل والتعليم والتحليل للكروماتوغرافيا الغازية (GC)",
    guideDesc: "يعتبر جهاز الكروماتوغرافيا الغازية (GC) من أهم الأجهزة التحليلية لفصل وتحديد المركبات المتطايرة في الكيمياء والهندسة الكيميائية.",
    quizMode: "وضع التمرين والاختبار التفاعلي",
    quizActive: "التمرين نشط - يرجى توقع ترتيب خروج المركبات",
    quizCorrect: "إجابة صحيحة وممتازة! لقد نجحت في توقع ترتيب خروج المركبات بدقة بناءً على القوانين الفيزيائية والكيميائية للعمود والحرارة.",
    quizIncorrect: "الترتيب المتوقع غير صحيح. حاول مرة أخرى! تذكر تأثير درجة الغليان وقطبية العمود على سرعة خروج المركبات.",
    quizIntro: "قبل تشغيل المحاكي، رتّب المركبات التالية حسب توقعك لترتيب خروجها (القمم الأولى أولاً):",
    quizPredictOrder: "رتّب بالمرتبة (من 1 إلى الأعلى):",
    quizDropPrompt: "اسحب أو رتب العناصر لتحديد تسلسل خروجها",
    quizStartSimulation: "تحقق بالتشغيل والمحاكاة الآن",
    quizCheckResult: "فحص الإجابة بعد الاكتمال",
    quizSuccessTitle: "تهانينا! لقد اجتزت الاختبار بنجاح",
    quizSuccessDesc: "لقد أثبتّ فهمك الكامل لآلية عمل الكروماتوغرافيا الغازية وتأثير الخصائص الكيميائية للمركبات على زمن الاستبقاء.",
    downloadCertificate: "طباعة شهادة الإتمام (PDF)",
    certificateTitle: "شهادة إتمام وتفوق تقني",
    certificateSubtitle: "البرنامج التدريبي المتقدم لمحاكاة الكروماتوغرافيا الغازية",
    certificateCertify: "تشهد كلية الهندسة والكلية التقنية الهندسية بالتعاون مع الهيئة العامة للمهندسين الكيميائيين في البصرة بأن المهندس/الطالب:",
    certificateBody: "قد أكمل بنجاح التدريب العملي والاختبار التفاعلي المتقدم لمحاكاة جهاز الكروماتوغرافيا الغازية (GC Simulator) وأثبت جدارة وفهماً عميقاً لآليات الفصل الفيزيوكيميائية، واجتاز بنجاح توقع ترتيب قمم الانفصال للمخاليط المعقدة بتقدير امتياز.",
    certificateDate: "تاريخ الإصدار:",
    certificateSignature: "الهيئة العامة للمهندسين الكيميائيين في البصرة",
    studentNamePlaceholder: "اكتب اسمك الثلاثي للحصول على الشهادة",
    studentNameLabel: "اسم الطالب الكامل:",
    isothermal: "درجة حرارة ثابتة (Isothermal)",
    tempProgram: "برنامج حراري متدرج (Temperature Program)",
    ovenMode: "نظام تشغيل الفرن:",
    ovenTemp: "درجة حرارة الفرن (°م):",
    initialTemp: "الحرارة الابتدائية (°م):",
    rampRate: "معدل الارتفاع (°م/دقيقة):",
    finalTemp: "الحرارة النهائية (°م):",
    columnType: "نوع العمود (الطور الثابت):",
    columnPolarity: "قطبية العمود:",
    carrierGas: "الغاز الحامل (الطور المتحرك):",
    flowRate: "معدل التدفق (مل/دقيقة):",
    detector: "نوع الكاشف (Detector):",
    sample: "العينة المراد تحليلها (Sample):",
    inject: "حقن العينة وتشغيل التحليل",
    injecting: "جاري الحقن والتبخير...",
    reset: "إعادة ضبط النظام",
    running: "جاري الفصل والمحاكاة في العمود بالوقت الحقيقي...",
    completed: "اكتمل التحليل الكروماتوغرافي بنجاح",
    resultsTitle: "جدول نتائج فصل القمم الكروماتوغرافية (Integration Table)",
    retentionTime: "زمن الاستبقاء (دقيقة)",
    peakArea: "مساحة القمة (µV·s)",
    peakHeight: "ارتفاع القمة (µV)",
    resolution: "درجة الفصل (Resolution)",
    compound: "المركب الكيميائي",
    formula: "الصيغة الكيميائية",
    boilingPoint: "درجة الغليان (°م)",
    polarity: "القطبية النسبية",
    concentration: "التركيز بالعينة (%)",
    exportPdf: "تصدير تقرير النتائج (PDF)",
    exportCsv: "تصدير البيانات (Excel/CSV)",
    logTitle: "سجل التحليلات السابقة والتشغيل",
    compareTitle: "مقارنة تشغيلتين كروماتوغرافيتين",
    compareRuns: "مقارنة النتائج جنباً إلى جنب",
    clearLog: "مسح سجل السجل",
    selectCompare: "اختر تشغيلتين للمقارنة الرسومية:",
    runNo: "التشغيل رقم",
    detectorSignal: "إشارة الكاشف (µV)",
    timeSec: "الزمن (ثانية)",
    dayMode: "الوضع النهاري",
    nightMode: "الوضع الليلي",
    backToSingle: "العودة للعرض الفردي",
    infoFid: "كاشف التأين باللهب (FID): ممتاز للمركبات العضوية والهيدروكربونية. حساس جداً، ولا يتحسس للغازات غير العضوية والماء.",
    infoTcd: "كاشف التوصيل الحراري (TCD): كاشف عام غير مدمر للمركبات. يتحسس لجميع المواد بما فيها الغازات والماء ولكن بحساسية أقل.",
    infoEcd: "كاشف التقاط الإلكترون (ECD): حساس للغاية للمركبات الهالوجينية (الكلور، الفلور) ومجموعات النيترو. مثالي للمبيدات الحشرية والملوثات.",
    infoNpd: "كاشف النيتروجين والفوسفور (NPD): حساس وانتقائي للمركبات التي تحتوي على النيتروجين والفوسفور مثل الأمينات وبعض المبيدات.",
    infoFpd: "كاشف الفوسفور والنيتروجين الضوئي (FPD): كاشف انتقائي ممتاز للمركبات التي تحتوي على الكبريت أو الفوسفور.",
    guideCarrierGas: "الغاز الحامل (Carrier Gas):",
    guideCarrierGasDesc: "يمثل الطور المتحرك الذي ينقل العينة المتبخرة عبر العمود دون التفاعل معها. يؤثر نوع الغاز ومعدل التدفق مباشرة على سرعة الفصل وعرض القمة الكروماتوغرافية.",
    guideColumn: "عمود الفصل الكروماتوغرافي (Column):",
    guideColumnDesc: "هو قلب الجهاز، حيث يحدث الانفصال الفعلي. الأعمدة الشعرية (Capillary) أرفع بكثير وأكثر كفاءة من الأعمدة المعبأة (Packed). يتحكم الطور الثابت بقطبيته في قوة جذب المركبات: العمود غير القطبي (Non-polar) يفصل حسب درجات الغليان، والعمود القطبي (Polar) يفصل حسب الجاذبية القطبية والهيدروجينية.",
    guideOven: "فرن التحكم بالحرارة (Oven):",
    guideOvenDesc: "التحكم الحراري الدقيق يسرع من حركة المركبات ذات الغليان المرتفع. النظام المتدرج (Temperature Program) يوفر قممًا ضيقة ويفصل المخاليط ذات المكونات المتنوعة بشكل أسرع وأدق من التشغيل الثابت (Isothermal).",
    guideDetector: "كاشفات الفصل (Detectors):",
    guideDetectorDesc: "تحول جزيئات المركبات الخارجة من العمود إلى إشارة كهربائية تظهر كقمة (Peak) في الرسم الكروماتوغرافي. اختيار الكاشف المناسب يؤثر على مدى وضوح ونوعية النتائج المستخلصة.",
    guideSamples: "العينات والتحاليل الصناعية:",
    guideSamplesDesc: "المحاكي يوفر عينات عملية حقيقية مثل الغاز الطبيعي (تتطلب TCD لرؤية CO2 والنيتروجين)، كحول الدم الجنائي (تحليل الأنشطة القضائية وتطبيقات FID)، النفط الخام (SimDist لفصل الهيدروكربونات الثقيلة)، والخليط البيئي للمبيدات (لتوضيح انتقائية NPD, FPD, ECD).",
    noRunsYet: "لا توجد تشغيلات مسجلة بعد. قم بحقن العينة لحفظ أول تشغيل.",
    saveRun: "حفظ التشغيل الحالي في السجل",
    savedRunsList: "قائمة التشغيلات المحفوظة",
    sideBySideCompare: "مقارنة الرسومات البيانية متراكبة",
    normalMode: "الوضع العادي"
  },
  en: {
    title: "Smart Gas Chromatography Simulator",
    subtitle: "Advanced Interactive Simulation of Chromatographic Separation & Gas Analysis",
    college1: "College of Engineering",
    college2: "Engineering Technical College",
    association: "The General Association of Chemical Engineers in Basra",
    developer: "Developer: Eng. Ali Saif AlDeen Haider Alnawfal | المطور: المهندس علي سيف الدين حيدر النوفل",
    aboutTitle: "About the Simulator",
    guideTitle: "Operation, Education & Analysis Guide for Gas Chromatography (GC)",
    guideDesc: "Gas Chromatography (GC) is a premier analytical technique utilized to separate and identify volatile compounds in chemistry and chemical engineering.",
    quizMode: "Interactive Training & Quiz Mode",
    quizActive: "Quiz Active - Please predict the compound elution order",
    quizCorrect: "Excellent and Correct! You successfully predicted the compound elution order based on the physical and chemical properties of the column and temperature.",
    quizIncorrect: "Incorrect order predicted. Try again! Remember the effect of boiling point and column polarity on the speed of compound elution.",
    quizIntro: "Before running the simulation, arrange the following compounds in the order you expect them to elute (first peaks first):",
    quizPredictOrder: "Elution Order (from 1 onwards):",
    quizDropPrompt: "Drag or select order to define elution sequence",
    quizStartSimulation: "Verify with Simulation Now",
    quizCheckResult: "Verify Answer After Run Completion",
    quizSuccessTitle: "Congratulations! You passed the quiz successfully",
    quizSuccessDesc: "You proved a complete understanding of how gas chromatography operates and the impact of compounds' chemical properties on retention time.",
    downloadCertificate: "Print Completion Certificate (PDF)",
    certificateTitle: "Certificate of Completion & Technical Excellence",
    certificateSubtitle: "Advanced Gas Chromatography Simulation Training Program",
    certificateCertify: "The College of Engineering & Engineering Technical College, in collaboration with the General Association of Chemical Engineers in Basra, certify that:",
    certificateBody: "Has successfully completed the advanced practical training and interactive examination for the Gas Chromatography Simulator (GC Simulator), proving high capability and a deep understanding of physicochemical separation mechanisms, and successfully passed the complex mixture elution order quiz with distinction.",
    certificateDate: "Date of Issue:",
    certificateSignature: "General Association of Chemical Engineers in Basra",
    studentNamePlaceholder: "Write your full triple name for the certificate",
    studentNameLabel: "Student Full Name:",
    isothermal: "Isothermal Mode",
    tempProgram: "Temperature Program Mode",
    ovenMode: "Oven Operation Mode:",
    ovenTemp: "Oven Temperature (°C):",
    initialTemp: "Initial Temp (°C):",
    rampRate: "Ramp Rate (°C/min):",
    finalTemp: "Final Temp (°C):",
    columnType: "Column Type (Stationary Phase):",
    columnPolarity: "Column Polarity:",
    carrierGas: "Carrier Gas (Mobile Phase):",
    flowRate: "Flow Rate (mL/min):",
    detector: "Detector Type:",
    sample: "Analyte Sample:",
    inject: "Inject Sample & Run Analysis",
    injecting: "Injecting & Vaporizing...",
    reset: "Reset System",
    running: "Column Separation & Real-time Simulation in Progress...",
    completed: "Chromatographic Analysis Completed Successfully",
    resultsTitle: "Chromatographic Peak Separation Table (Integration Table)",
    retentionTime: "Retention Time (min)",
    peakArea: "Peak Area (µV·s)",
    peakHeight: "Peak Height (µV)",
    resolution: "Resolution (Rs)",
    compound: "Chemical Compound",
    formula: "Chemical Formula",
    boilingPoint: "Boiling Point (°C)",
    polarity: "Relative Polarity",
    concentration: "Concentration in Sample (%)",
    exportPdf: "Export Results Report (PDF)",
    exportCsv: "Export Raw Data (Excel/CSV)",
    logTitle: "Previous Runs & Log Records",
    compareTitle: "Compare Two Chromatograms",
    compareRuns: "Compare Results Side-by-Side",
    clearLog: "Clear Log History",
    selectCompare: "Select two runs for graphical overlay comparison:",
    runNo: "Run No.",
    detectorSignal: "Detector Signal (µV)",
    timeSec: "Time (seconds)",
    dayMode: "Light Mode",
    nightMode: "Dark Mode",
    backToSingle: "Back to Single View",
    infoFid: "Flame Ionization Detector (FID): Excellent for organic and hydrocarbon compounds. Highly sensitive; does not respond to inert gases and water.",
    infoTcd: "Thermal Conductivity Detector (TCD): Universal non-destructive detector. Responds to all compounds including gases and water, but with lower sensitivity.",
    infoEcd: "Electron Capture Detector (ECD): Extremely sensitive to halogenated compounds (Cl, F, Br) and nitro groups. Ideal for environmental pesticides and pollutants.",
    infoNpd: "Nitrogen-Phosphorus Detector (NPD): Selectively sensitive to compounds containing nitrogen and phosphorus, such as amines and specific pesticides.",
    infoFpd: "Flame Photometric Detector (FPD): Highly selective detector for compounds containing phosphorus or sulfur.",
    guideCarrierGas: "Carrier Gas:",
    guideCarrierGasDesc: "Represents the mobile phase transporting the vaporized sample. The carrier gas type and flow rate directly impact separation speed and chromatogram peak width.",
    guideColumn: "Chromatographic Separation Column:",
    guideColumnDesc: "The heart of the GC system. Capillary columns are much thinner and more efficient than packed columns. The stationary phase polarity controls compound retention: non-polar columns separate by boiling points, while polar columns separate based on polarity and hydrogen bonding.",
    guideOven: "Temperature Controlled Oven:",
    guideOvenDesc: "Precise thermal control accelerates high-boiling compounds. Temperature programming provides narrower peaks and resolves complex mixtures faster and sharper than isothermal runs.",
    guideDetector: "Analytical Detectors:",
    guideDetectorDesc: "Converts compound molecules eluting from the column into electrical signals represented as chromatographic peaks. Selecting the correct detector is crucial for resolution and target analyte selectivity.",
    guideSamples: "Industrial Samples & Applications:",
    guideSamplesDesc: "The simulator features realistic samples like Natural Gas (requires TCD to see CO2 and N2), Forensic Blood Alcohol (classic FID application), Crude Oil (Simulated Distillation), and Environmental Pesticide Mixes (demonstrating NPD, FPD, and ECD selectivity).",
    noRunsYet: "No runs logged yet. Inject a sample to save your first run.",
    saveRun: "Save Current Run to Log",
    savedRunsList: "Saved Runs List",
    sideBySideCompare: "Overlay Graph Comparison",
    normalMode: "Normal Mode"
  },
  es: {
    title: "Simulador Inteligente de Cromatografía de Gases",
    subtitle: "Simulación interactiva avanzada de separación cromatográfica y análisis de gases",
    college1: "Facultad de Ingeniería",
    college2: "Facultad Técnica de Ingeniería",
    association: "La Asociación General de Ingenieros Químicos en Basora",
    developer: "Desarrollador: Eng. Ali Saif AlDeen Haider Alnawfal | المطور: المهندس علي سيف الدين حيدر النوفل",
    aboutTitle: "Sobre el Simulador",
    guideTitle: "Guía de Operación, Educación y Análisis para Cromatografía de Gases (GC)",
    guideDesc: "La cromatografía de gases (GC) es una técnica analítica de primer nivel utilizada para separar e identificar compuestos volátiles en química e ingeniería química.",
    quizMode: "Modo interactivo de entrenamiento y examen",
    quizActive: "Prueba activa - prediga el orden de elución de los compuestos",
    quizCorrect: "¡Excelente y Correcto! Predijo con éxito el orden de elución de los compuestos basándose en las propiedades físicas y químicas de la columna y la temperatura.",
    quizIncorrect: "Orden predicho incorrecto. ¡Intente de nuevo! Recuerde el efecto del punto de ebullición y la polaridad de la columna en la elución.",
    quizIntro: "Antes de ejecutar la simulación, organice los compuestos en el orden en que espera que eluyan (los primeros picos primero):",
    quizPredictOrder: "Orden de elución (de 1 en adelante):",
    quizDropPrompt: "Arrastre o seleccione el orden para definir la secuencia de elución",
    quizStartSimulation: "Verifique con la simulación ahora",
    quizCheckResult: "Verificar respuesta después de la ejecución",
    quizSuccessTitle: "¡Felicitaciones! Pasó la prueba con éxito",
    quizSuccessDesc: "Demostró una comprensión completa del funcionamiento de la cromatografía de gases y el impacto de las propiedades químicas de los compuestos.",
    downloadCertificate: "Imprimir Certificado de Finalización (PDF)",
    certificateTitle: "Certificado de Finalización y Excelencia Técnica",
    certificateSubtitle: "Programa de Entrenamiento Avanzado en Cromatografía de Gases",
    certificateCertify: "La Facultad de Ingeniería y la Facultad Técnica de Ingeniería, en colaboración con la Asociación General de Ingenieros Químicos en Basora, certifican que:",
    certificateBody: "Ha completado con éxito la capacitación práctica avanzada y el examen interactivo del simulador de cromatografía de gases (GC), demostrando un profundo conocimiento de los mecanismos físico-químicos de separación.",
    certificateDate: "Fecha de emisión:",
    certificateSignature: "Asociación General de Ingenieros Químicos en Basora",
    studentNamePlaceholder: "Escriba su nombre completo para el certificado",
    studentNameLabel: "Nombre completo del estudiante:",
    isothermal: "Modo Isotérmico",
    tempProgram: "Programa de Temperatura",
    ovenMode: "Modo de Horno:",
    ovenTemp: "Temperatura del horno (°C):",
    initialTemp: "Temp. Inicial (°C):",
    rampRate: "Rampa de temp. (°C/min):",
    finalTemp: "Temp. Final (°C):",
    columnType: "Tipo de columna (fase estacionaria):",
    columnPolarity: "Polaridad de columna:",
    carrierGas: "Gas portador (fase móvil):",
    flowRate: "Tasa de flujo (mL/min):",
    detector: "Tipo de Detector:",
    sample: "Muestra de analito:",
    inject: "Inyectar Muestra y Ejecutar Análisis",
    injecting: "Inyectando y vaporizando...",
    reset: "Reiniciar Sistema",
    running: "Separación y simulación en tiempo real en progreso...",
    completed: "Análisis cromatográfico completado con éxito",
    resultsTitle: "Tabla de resultados de separación de picos (Tabla de integración)",
    retentionTime: "Tiempo de retención (min)",
    peakArea: "Área del pico (µV·s)",
    peakHeight: "Altura del pico (µV)",
    resolution: "Resolución (Rs)",
    compound: "Compuesto químico",
    formula: "Fórmula química",
    boilingPoint: "Punto de ebullición (°C)",
    polarity: "Polaridad relativa",
    concentration: "Concentración (%)",
    exportPdf: "Exportar Reporte (PDF)",
    exportCsv: "Exportar Datos (Excel/CSV)",
    logTitle: "Historial de Análisis Anteriores",
    compareTitle: "Comparar dos cromatogramas",
    compareRuns: "Comparar Resultados Lado a Lado",
    clearLog: "Limpiar historial",
    selectCompare: "Seleccione dos corridas para comparar gráficos:",
    runNo: "Corrida No.",
    detectorSignal: "Señal del detector (µV)",
    timeSec: "Tiempo (segundos)",
    dayMode: "Modo Claro",
    nightMode: "Modo Oscuro",
    backToSingle: "Regresar a Vista Única",
    infoFid: "Detector de Ionización de Llama (FID): Excelente para compuestos orgánicos e hidrocarburos. Altamente sensible; no responde a gases inertes ni agua.",
    infoTcd: "Detector de Conductividad Térmica (TCD): Detector universal no destructivo. Responde a todos los compuestos incluidos gases y agua, pero con menor sensibilidad.",
    infoEcd: "Detector de Captura de Electrones (ECD): Extremadamente sensible a compuestos halogenados (Cl, F, Br) y grupos nitro. Ideal para pesticidas ambientales.",
    infoNpd: "Detector de Nitrógeno-Fósforo (NPD): Sensible de forma selectiva a compuestos que contienen nitrógeno y fósforo.",
    infoFpd: "Detector Fotométrico de Llama (FPD): Muy selectivo para compuestos con azufre o fósforo.",
    guideCarrierGas: "Gas Portador:",
    guideCarrierGasDesc: "Fase móvil que transporta la muestra vaporizada. El tipo de gas y la tasa de flujo afectan el tiempo de separación y el ancho del pico.",
    guideColumn: "Columna de separación cromatográfica:",
    guideColumnDesc: "El corazón del GC. Las columnas capilares son más delgadas y eficientes. Las columnas no polares separan por puntos de ebullición, mientras que las polares separan por polaridad y enlaces de hidrógeno.",
    guideOven: "Horno térmico controlado:",
    guideOvenDesc: "El control térmico preciso acelera compuestos de alto punto de ebullición. El programa de temperatura da picos más estrechos que el modo isotérmico.",
    guideDetector: "Detectores Analíticos:",
    guideDetectorDesc: "Convierte moléculas de compuestos eluidos de la columna en señales eléctricas. El detector adecuado es clave para la sensibilidad.",
    guideSamples: "Muestras industriales y aplicaciones:",
    guideSamplesDesc: "El simulador cuenta con gas natural, alcohol en sangre, petróleo crudo y mezclas de pesticidas para demostrar la selectividad de los detectores.",
    noRunsYet: "No hay corridas registradas. Inyecte una muestra para guardar.",
    saveRun: "Guardar corrida actual",
    savedRunsList: "Lista de corridas guardadas",
    sideBySideCompare: "Comparación de superposición gráfica",
    normalMode: "Modo Normal"
  },
  de: {
    title: "Smarter Gaschromatographie-Simulator",
    subtitle: "Fortgeschrittene interaktive Simulation der chromatographischen Trennung & Gasanalyse",
    college1: "Fakultät für Ingenieurwissenschaften",
    college2: "Technische Fakultät für Ingenieurwesen",
    association: "Der Allgemeine Verband der Chemieingenieure in Basra",
    developer: "Entwickler: Eng. Ali Saif AlDeen Haider Alnawfal | المطور: المهندس علي سيف الدين حيدر النوفل",
    aboutTitle: "Über den Simulator",
    guideTitle: "Betriebs-, Bildungs- und Analysehandbuch für die Gaschromatographie (GC)",
    guideDesc: "Die Gaschromatographie (GC) ist eine der wichtigsten analytischen Methoden zur Trennung und Identifizierung flüchtiger Verbindungen in der Chemie und Verfahrenstechnik.",
    quizMode: "Interaktiver Trainings- und Quizmodus",
    quizActive: "Quiz aktiv - Bitte sagen Sie die Elutionsreihenfolge voraus",
    quizCorrect: "Hervorragend und richtig! Sie haben die Elutionsreihenfolge der Verbindungen basierend auf den Säuleneigenschaften und der Temperatur erfolgreich vorhergesagt.",
    quizIncorrect: "Falsche Reihenfolge vorhergesagt. Versuchen Sie es noch einmal! Denken Sie an den Einfluss des Siedepunkts und der Säulenpolarität.",
    quizIntro: "Ordnen Sie die folgenden Verbindungen in der Reihenfolge an, in der sie voraussichtlich eluieren (erste Peaks zuerst):",
    quizPredictOrder: "Elutionsreihenfolge (ab 1):",
    quizDropPrompt: "Ziehen Sie die Elemente per Drag-and-Drop, um die Sequenz festzulegen",
    quizStartSimulation: "Jetzt mit der Simulation überprüfen",
    quizCheckResult: "Antwort nach Abschluss überprüfen",
    quizSuccessTitle: "Herzlichen Glückwunsch! Sie haben das Quiz erfolgreich bestanden",
    quizSuccessDesc: "Sie haben ein vollständiges Verständnis der Funktionsweise der Gaschromatographie und der Auswirkungen chemischer Eigenschaften bewiesen.",
    downloadCertificate: "Teilnahmebescheinigung drucken (PDF)",
    certificateTitle: "Zertifikat über den Abschluss & Technische Exzellenz",
    certificateSubtitle: "Fortgeschrittenes Schulungsprogramm zur Gaschromatographie-Simulation",
    certificateCertify: "Die Fakultät für Ingenieurwissenschaften & Technische Fakultät für Ingenieurwesen, in Zusammenarbeit mit dem Allgemeinen Verband der Chemieingenieure in Basra, bescheinigen, dass:",
    certificateBody: "Die fortgeschrittene praktische Ausbildung und die interaktive Prüfung für den Gaschromatographie-Simulator erfolgreich abgeschlossen hat und hohe Kompetenz sowie ein tiefes Verständnis bewiesen hat.",
    certificateDate: "Ausstellungsdatum:",
    certificateSignature: "Allgemeiner Verband der Chemieingenieure in Basra",
    studentNamePlaceholder: "Geben Sie Ihren vollständigen Namen ein",
    studentNameLabel: "Vollständiger Name des Studenten:",
    isothermal: "Isothermer Modus",
    tempProgram: "Temperaturprogramm",
    ovenMode: "Ofen-Betriebsmodus:",
    ovenTemp: "Ofentemperatur (°C):",
    initialTemp: "Anfangstemp. (°C):",
    rampRate: "Heizrate (°C/min):",
    finalTemp: "Endtemp. (°C):",
    columnType: "Säulentyp (Stationäre Phase):",
    columnPolarity: "Säulenpolarität:",
    carrierGas: "Trägergas (Mobile Phase):",
    flowRate: "Flussrate (mL/min):",
    detector: "Detektortyp:",
    sample: "Analysenprobe:",
    inject: "Probe injizieren & Analyse starten",
    injecting: "Injizieren und Verdampfen...",
    reset: "System zurücksetzen",
    running: "Säulentrennung & Echtzeitsimulation laufen...",
    completed: "Chromatographische Analyse erfolgreich abgeschlossen",
    resultsTitle: "Tabelle der Peak-Trennungsergebnisse (Integrationstabelle)",
    retentionTime: "Retentionszeit (min)",
    peakArea: "Peakfläche (µV·s)",
    peakHeight: "Peakhöhe (µV)",
    resolution: "Auflösung (Rs)",
    compound: "Chemische Verbindung",
    formula: "Chemische Formel",
    boilingPoint: "Siedepunkt (°C)",
    polarity: "Relative Polarität",
    concentration: "Konzentration (%)",
    exportPdf: "Ergebnisbericht exportieren (PDF)",
    exportCsv: "Rohdaten exportieren (Excel/CSV)",
    logTitle: "Bisherige Messungen & Protokolle",
    compareTitle: "Zwei Chromatogramme vergleichen",
    compareRuns: "Ergebnisse Seite an Seite vergleichen",
    clearLog: "Protokoll löschen",
    selectCompare: "Zwei Läufe für den grafischen Vergleich auswählen:",
    runNo: "Lauf Nr.",
    detectorSignal: "Detektorsignal (µV)",
    timeSec: "Zeit (Sekunden)",
    dayMode: "Heller Modus",
    nightMode: "Dunkler Modus",
    backToSingle: "Zurück zur Einzelansicht",
    infoFid: "Flammenionisationsdetektor (FID): Hervorragend für organische und Kohlenwasserstoffverbindungen. Sehr empfindlich, reagiert nicht auf inerte Gase und Wasser.",
    infoTcd: "Wärmeleitfähigkeitsdetektor (TCD): Universeller, zerstörungsfreier Detektor. Reagiert auf alle Verbindungen einschließlich Gase und Wasser, jedoch mit geringerer Empfindlichkeit.",
    infoEcd: "Elektroneneinfangdetektor (ECD): Extrem empfindlich gegenüber halogenierten Verbindungen (Cl, F, Br) und Nitrogruppen. Ideal für Pestizide.",
    infoNpd: "Stickstoff-Phosphor-Detektor (NPD): Selektiv empfindlich gegenüber stickstoff- und phosphorhaltigen Verbindungen wie Aminen.",
    infoFpd: "Flammenphotometrischer Detektor (FPD): Hochselektiver Detektor für schwefel- oder phosphorhaltige Verbindungen.",
    guideCarrierGas: "Trägergas:",
    guideCarrierGasDesc: "Die mobile Phase, die die verdampfte Probe transportiert. Der Trägergastyp und die Flussrate beeinflussen direkt die Trenngeschwindigkeit und die Peakbreite.",
    guideColumn: "Chromatographische Trennsäule:",
    guideColumnDesc: "Das Herz des GC-Systems. Kapillarsäulen sind viel dünner und effizienter als gepackte Säulen. Die stationäre Phase polarität steuert die Verbindungretention.",
    guideOven: "Temperaturkontrollierter Ofen:",
    guideOvenDesc: "Präzise thermische Kontrolle beschleunigt hochsiedende Verbindungen. Das Temperaturprogramm sorgt für schmalere Peaks im Vergleich zum isothermen Betrieb.",
    guideDetector: "Analytische Detektoren:",
    guideDetectorDesc: "Wandelt eluierende Moleküle in elektrische Signale um. Der richtige Detektor ist entscheidend für Selektivität und Auflösung.",
    guideSamples: "Industrielle Proben & Anwendungen:",
    guideSamplesDesc: "Der Simulator bietet Proben wie Erdgas, Blutalkohol, Rohöl und Pestizide, um die Selektivität von FID, TCD, ECD, NPD und FPD zu demonstrieren.",
    noRunsYet: "Noch keine Läufe protokolliert. Injizieren Sie eine Probe, um den ersten Lauf zu speichern.",
    saveRun: "Aktuellen Lauf speichern",
    savedRunsList: "Gespeicherte Läufe",
    sideBySideCompare: "Diagrammüberlagerungsvergleich",
    normalMode: "Normaler Modus"
  }
};
