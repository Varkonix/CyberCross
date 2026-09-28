/**
 * CYBERCROSS - Diccionario Único de Traducciones (i18n)
 * Soporte bilingüe: Español (ES) / American English (EN-US)
 */

const TRANSLATIONS = {
  es: {
    // HUD Superior
    app_title: "CYBER",
    app_title_suffix: "CROSS",
    btn_sound_title: "Alternar Sonido",
    btn_cards_title: "Glosario & Tarjetas de Refuerzo",
    btn_settings_title: "Ajustes del Sistema",
    btn_levels_title: "Cambiar de Nivel",
    lvl_badge: "LVL",
    rep_badge_title: "Puntos de Reputación",

    // Panel de Pistas
    clue_aria: "Pista de la palabra activa",
    clue_loading: "Cargando sistema criptográfico...",
    clue_word_label: "PALABRA",
    dir_horizontal: "HORIZONTAL",
    dir_vertical: "VERTICAL",
    letters_suffix: "LETRAS",
    btn_prev_clue_title: "Palabra Anterior",
    btn_next_clue_title: "Palabra Siguiente",

    // Herramientas de Entrada
    input_aria: "Rueda de entrada de letras",
    btn_hint: "PISTA",
    btn_hint_title: "Revelar letra",
    free_hints_suffix: "GRATIS",
    rep_cost: "-25 REP",
    btn_shuffle: "BARAJAR",
    btn_shuffle_title: "Barajar letras desordenadas",
    btn_backspace: "BORRAR",
    btn_backspace_title: "Borrar letra",

    // Modal de Refuerzo Cognitivo
    ref_modal_title: "PROTOCOLO DE REFUERZO COGNITIVO",
    ref_modal_desc: "El sistema de ciberseguridad detectó intentos fallidos o uso elevado de pistas. Analiza el siguiente concepto para afianzar tu conocimiento:",
    ref_label_def: "Definición Operativa:",
    ref_label_scenario: "Vector de Ataque / Escenario Real:",
    ref_label_defense: "Medida Defensiva / Mitigación:",
    ref_btn_continue: "ENTENDIDO: CONTINUAR",

    // Modal de Victoria
    vic_modal_title: "NIVEL DESENCRIPTADO CON ÉXITO",
    vic_rep_earned: "Reputación Ganada",
    vic_hints_used: "Pistas Utilizadas",
    vic_desc: "Has fortalecido tus defensas cognitivas. El cortafuegos está listo para el siguiente desafío.",
    vic_btn_next: "SIGUIENTE NIVEL",

    // Modal de Matriz de Niveles
    levels_modal_title: "MATRIZ DE NIVELES (1 - 100)",
    diff_label: "Dificultad:",
    concepts_label: "conceptos",
    diff_basic: "Básico",
    diff_intermediate: "Intermedio",
    diff_advanced: "Avanzado",

    // Modal de Glosario (Dossier)
    dossier_modal_title: "GLOSARIO DE REFUERZO",
    dossier_empty_msg: "Aún no tienes tarjetas de refuerzo archivadas.<br>Aparecerán automáticamente aquí cuando el sistema identifique conceptos clave para reforzar.",

    // Modal de Ajustes
    settings_modal_title: "AJUSTES DEL SISTEMA",
    settings_lang_label: "IDIOMA / LANGUAGE",
    settings_sound_label: "AUDIO Y EFECTOS",
    sound_enabled: "🔊 Efectos de sonido activados",
    sound_disabled: "🔇 Efectos de sonido silenciados",
    btn_close_settings: "CERRAR",

    // Alertas del Sistema
    alert_no_rep: "⚠️ Reputación insuficiente para desbloquear pista. Completa palabras o niveles para ganar más.",
    alert_all_levels: "🎉 ¡FELICITACIONES AGENTE! Has completado todos los niveles disponibles. ¡Mantente atento a futuras actualizaciones de firmware!",

    // Diccionario de Contenido de Niveles
    levels: {
      1: {
        name: "Nivel 01",
        theme: "Perímetro y Amenazas Básicas",
        difficulty: "Básico",
        words: {
          w1: {
            clue: "Software malicioso diseñado para infiltrarse, alterar o dañar un sistema informático sin el consentimiento del usuario.",
            reinforce: {
              title: "MALWARE (Software Malicioso)",
              def: "Término paraguas que describe virus, gusanos, troyanos o cualquier código creado intencionalmente para comprometer la confidencialidad, integridad o disponibilidad de un sistema.",
              scenario: "Descarga involuntaria al hacer clic en adjuntos sospechosos o software crackeado desde sitios web no oficiales.",
              defense: "Instalar soluciones antivirus/EDR en tiempo real, mantener el sistema operativo parchado y nunca ejecutar programas desconocidos."
            }
          },
          w2: {
            clue: "Sistema de defensa perimetral que inspecciona y filtra el tráfico de red entrante y saliente según políticas de seguridad.",
            reinforce: {
              title: "FIREWALL (Cortafuegos)",
              def: "Dispositivo o software que opera en las fronteras de red aplicando reglas de filtrado de paquetes basadas en IP, puertos y protocolos.",
              scenario: "Un atacante remoto intenta escanear puertos abiertos de tu equipo para conectarse a un servicio vulnerable sin autenticación.",
              defense: "Aplicar la regla de denegación predeterminada (Default Deny): bloquear todo el tráfico salvo el estrictamente autorizado."
            }
          },
          w3: {
            clue: "Copia de seguridad periódica de la información crítica que permite recuperarla ante fallos, pérdidas o ciberataques.",
            reinforce: {
              title: "BACKUP (Copia de Respaldo)",
              def: "Duplicación programada de bases de datos y archivos en medios aislados para asegurar la continuidad de negocio ante desastres.",
              scenario: "Un ataque de ransomware cifra por completo los discos duros de la organización exigiendo un rescate millonario.",
              defense: "Aplicar la regla 3-2-1: 3 copias de los datos, en 2 medios de almacenamiento diferentes, con 1 copia fuera de línea (air-gap)."
            }
          }
        }
      },
      2: {
        name: "Nivel 02",
        theme: "Ingeniería Social e Identidad",
        difficulty: "Básico",
        words: {
          w1: {
            clue: "Técnica de engaño que suplanta la identidad de organizaciones de confianza para inducir a la víctima a revelar contraseñas.",
            reinforce: {
              title: "PHISHING (Suplantación de Identidad)",
              def: "Ataque psicológico basado en urgencia, miedo o recompensa, donde el remitente falsifica correos o mensajes para robar credenciales bancarias o corporativas.",
              scenario: "Un correo con el logo idéntico a tu banco alertando que 'tu cuenta será suspendida si no confirmas tu contraseña en este enlace'.",
              defense: "Inspeccionar el dominio del remitente, nunca hacer clic en enlaces de alerta bancaria y habilitar autenticación multifactor (2FA)."
            }
          },
          w2: {
            clue: "Cadena de caracteres secreta que valida la identidad de un usuario frente a un sistema de control de acceso.",
            reinforce: {
              title: "PASSWORD (Contraseña)",
              def: "Mecanismo elemental de autenticación basado en conocimiento ('algo que sabes'). Su seguridad depende de su longitud, entropía y confidencialidad.",
              scenario: "Reutilizar contraseñas cortas o predecibles ('admin123') en múltiples plataformas. Si un servicio se filtra, caen todas las cuentas.",
              defense: "Utilizar frases de contraseña (passphrases) de al menos 14 caracteres con gestores de contraseñas seguros y sin reutilización."
            }
          },
          w3: {
            clue: "Individuo con profundos conocimientos informáticos que explora la arquitectura, vulnerabilidades y límites de los sistemas.",
            reinforce: {
              title: "HACKER (Ético vs Malicioso)",
              def: "Especialista técnico capaz de comprender sistemas a bajo nivel. Los 'White Hat' (hackers éticos) ayudan a proteger sistemas encontrando fallos antes que los criminales.",
              scenario: "Un investigador de seguridad descubre una vulnerabilidad crítica de inyección SQL y la reporta responsablemente a la empresa.",
              defense: "Contratar pruebas de penetración periódicas (pentesting) e implementar políticas de divulgación responsable de vulnerabilidades."
            }
          }
        }
      },
      3: {
        name: "Nivel 03",
        theme: "Amenazas Criptográficas y Camuflaje",
        difficulty: "Básico",
        words: {
          w1: {
            clue: "Tipo de malware que secuestra y cifra los archivos de la víctima, exigiendo un pago económico para proporcionar la clave de descifrado.",
            reinforce: {
              title: "RANSOMWARE (Secuestro de Datos)",
              def: "Código dañino que ejecuta algoritmos criptográficos asimétricos para bloquear el acceso a documentos y servidores empresariales con fines extorsivos.",
              scenario: "Un archivo de Word malicioso con macros ejecutadas cifra instantáneamente la carpeta compartida de un hospital.",
              defense: "Copias de seguridad inmutables fuera de la red local, restricción de ejecución de macros y segmentación estricta de subredes."
            }
          },
          w2: {
            clue: "Proceso criptográfico que transforma información legible en texto cifrado ininteligible mediante una clave y un algoritmo.",
            reinforce: {
              title: "ENCRIPTAR / CIFRAR",
              def: "Aplicación de matemáticas criptográficas (AES, RSA) para garantizar la confidencialidad absoluta de la información en reposo y en tránsito.",
              scenario: "El robo físico de una computadora portátil empresarial sin cifrado de disco permite a los ladrones extraer datos sensibles sin contraseña.",
              defense: "Habilitar cifrado total de disco (BitLocker / FileVault) y requerir HTTPS/TLS en todas las comunicaciones en la web."
            }
          },
          w3: {
            clue: "Software malintencionado que se presenta como una aplicación legítima o inofensiva para engañar al usuario e instalar puertas traseras.",
            reinforce: {
              title: "CABALLO DE TROYA",
              def: "Malware que camufla su verdadera naturaleza destructiva bajo la fachada de un software útil (ej. un juego, parche o visor de PDF).",
              scenario: "Descarga de un 'crack' de software que, además de activar el programa, instala un backdoor de acceso remoto (RAT) para el atacante.",
              defense: "Descargar aplicaciones exclusivamente desde repositorios y tiendas oficiales verificadas, validando siempre hashes criptográficos."
            }
          }
        }
      },
      4: {
        name: "Nivel 04",
        theme: "Vectores de Infección y Redes Zombi",
        difficulty: "Básico",
        words: {
          w1: {
            clue: "Fragmento de software, comando o prueba de concepto creada específicamente para aprovechar una falla de seguridad en un sistema.",
            reinforce: {
              title: "EXPLOIT (Aprovechamiento de Falla)",
              def: "Código que saca provecho de un bug de software (como un desbordamiento de búfer) para alterar el flujo del programa o tomar control del sistema.",
              scenario: "Envío de paquetes de red manipulados a un servidor web sin parchar para forzar la ejecución remota de comandos de administrador.",
              defense: "Gestión proactiva de parches de seguridad y utilización de tecnologías de mitigación en compiladores (ASLR, DEP)."
            }
          },
          w2: {
            clue: "Programa malicioso que recopila de manera encubierta información privada y hábitos de navegación del usuario para remitirlos a un atacante.",
            reinforce: {
              title: "SPYWARE (Software Espía)",
              def: "Malware centrado en el sigilo para capturar pulsaciones de teclado (keyloggers), credenciales almacenadas o actividad de pantalla sin levantar sospechas.",
              scenario: "Una extensión no autorizada del navegador lee silenciosamente los números de tarjeta ingresados en tiendas virtuales.",
              defense: "Auditar periódicamente las extensiones del navegador y revocar permisos excesivos a aplicaciones en dispositivos móviles y de escritorio."
            }
          },
          w3: {
            clue: "Red de dispositivos zombis infectados que son coordinados y controlados remotamente por un atacante para lanzar ciberataques.",
            reinforce: {
              title: "BOTNET (Red Zombi)",
              def: "Agrupación masiva de computadoras, servidores o dispositivos IoT comprometidos que obedecen comandos de un servidor Command and Control (C2).",
              scenario: "Millones de cámaras web inteligentes con claves de fábrica son usadas para saturar con tráfico basura los servidores de una entidad bancaria (DDoS).",
              defense: "Cambiar siempre las credenciales predeterminadas en dispositivos IoT y segmentarlos en redes virtuales (VLANs) aisladas."
            }
          }
        }
      },
      5: {
        name: "Nivel 05",
        theme: "Defensa Activa y Autenticación",
        difficulty: "Básico",
        words: {
          w1: {
            clue: "Sistema trampa o señuelo configurado intencionalmente para atraer a atacantes, detectar intrusiones y analizar sus tácticas.",
            reinforce: {
              title: "HONEYPOT (Señuelo)",
              def: "Recurso informático señuelo sin actividad productiva real. Cualquier intento de conexión entrante es catalogado como una actividad maliciosa sospechosa.",
              scenario: "Un servidor falso expuesto con supuestos datos financieros registra las técnicas y herramientas de penetración de los atacantes.",
              defense: "Implementar honeypots en subredes internas para detectar movimientos laterales tempranos antes de que alcancen los servidores reales."
            }
          },
          w2: {
            clue: "Actualización de código liberada por un fabricante para corregir vulnerabilidades o bugs de seguridad en un software.",
            reinforce: {
              title: "PARCHE DE SEGURIDAD",
              def: "Modificación de software liberada para subsanar debilidades de código antes de que sean explotadas por actores maliciosos.",
              scenario: "Se descubre una vulnerabilidad crítica día cero. Los sistemas que no instalen el parche de emergencia en 48 horas serán atacados por bots.",
              defense: "Disponer de un proceso automatizado de evaluación e implementación de actualizaciones de seguridad críticas."
            }
          },
          w3: {
            clue: "Dispositivo o código digital temporal de un solo uso empleado como segundo factor de autenticación (2FA) para verificar identidades.",
            reinforce: {
              title: "TOKEN DE AUTENTICACIÓN",
              def: "Elemento de seguridad basado en posesión ('algo que tienes'). Genera códigos dinámicos basados en tiempo (TOTP) para impedir accesos ilegítimos.",
              scenario: "Un atacante obtiene tu contraseña mediante una filtración, pero no puede acceder porque el sistema le exige el código dinámico de tu token.",
              defense: "Requerir autenticación multifactor (MFA/2FA) en todas las cuentas mediante apps autenticadoras o llaves físicas de seguridad (FIDO2)."
            }
          }
        }
      }
    }
  },
  en: {
    // HUD Header
    app_title: "CYBER",
    app_title_suffix: "CROSS",
    btn_sound_title: "Toggle Sound",
    btn_cards_title: "Glossary & Reinforcement Cards",
    btn_settings_title: "System Settings",
    btn_levels_title: "Change Level",
    lvl_badge: "LVL",
    rep_badge_title: "Reputation Points",

    // Clue Panel
    clue_aria: "Active word clue",
    clue_loading: "Loading cryptographic system...",
    clue_word_label: "WORD",
    dir_horizontal: "HORIZONTAL",
    dir_vertical: "VERTICAL",
    letters_suffix: "LETTERS",
    btn_prev_clue_title: "Previous Word",
    btn_next_clue_title: "Next Word",

    // Input Tools
    input_aria: "Letter input wheel",
    btn_hint: "HINT",
    btn_hint_title: "Reveal letter",
    free_hints_suffix: "FREE",
    rep_cost: "-25 REP",
    btn_shuffle: "SHUFFLE",
    btn_shuffle_title: "Shuffle scrambled letters",
    btn_backspace: "DELETE",
    btn_backspace_title: "Delete letter",

    // Cognitive Reinforcement Modal
    ref_modal_title: "COGNITIVE REINFORCEMENT PROTOCOL",
    ref_modal_desc: "The cybersecurity system detected failed attempts or high hint usage. Analyze the following concept to strengthen your knowledge:",
    ref_label_def: "Operational Definition:",
    ref_label_scenario: "Attack Vector / Real-World Scenario:",
    ref_label_defense: "Defensive Measure / Mitigation:",
    ref_btn_continue: "UNDERSTOOD: CONTINUE",

    // Victory Modal
    vic_modal_title: "LEVEL SUCCESSFULLY DECRYPTED",
    vic_rep_earned: "Reputation Earned",
    vic_hints_used: "Hints Used",
    vic_desc: "You have strengthened your cognitive defenses. The firewall is ready for the next challenge.",
    vic_btn_next: "NEXT LEVEL",

    // Level Matrix Modal
    levels_modal_title: "LEVEL MATRIX (1 - 100)",
    diff_label: "Difficulty:",
    concepts_label: "concepts",
    diff_basic: "Basic",
    diff_intermediate: "Intermediate",
    diff_advanced: "Advanced",

    // Dossier Modal
    dossier_modal_title: "REINFORCEMENT GLOSSARY",
    dossier_empty_msg: "You do not have archived reinforcement cards yet.<br>They will automatically appear here when the system identifies key concepts to reinforce.",

    // Settings Modal
    settings_modal_title: "SYSTEM SETTINGS",
    settings_lang_label: "LANGUAGE / IDIOMA",
    settings_sound_label: "AUDIO & SOUND EFFECTS",
    sound_enabled: "🔊 Sound effects enabled",
    sound_disabled: "🔇 Sound effects muted",
    btn_close_settings: "CLOSE",

    // System Alerts
    alert_no_rep: "⚠️ Insufficient reputation to unlock hint. Complete words or levels to earn more.",
    alert_all_levels: "🎉 CONGRATULATIONS AGENT! You have completed all available levels. Stay tuned for future firmware updates!",

    // Level Content Dictionary (American English)
    levels: {
      1: {
        name: "Level 01",
        theme: "Perimeter & Basic Threats",
        difficulty: "Basic",
        words: {
          w1: {
            clue: "Malicious software designed to infiltrate, disrupt, or damage a computer system without the user's consent.",
            reinforce: {
              title: "MALWARE (Malicious Software)",
              def: "Umbrella term describing viruses, worms, trojans, or any code intentionally created to compromise confidentiality, integrity, or availability.",
              scenario: "Inadvertent download after clicking on suspicious email attachments or cracked software from unauthorized websites.",
              defense: "Deploy real-time antivirus/EDR solutions, keep operating systems fully patched, and never run untrusted executables."
            }
          },
          w2: {
            clue: "Perimeter defense system that inspects and filters inbound and outbound network traffic based on predetermined security rules.",
            reinforce: {
              title: "FIREWALL (Network Barrier)",
              def: "Hardware device or software program operating at network boundaries, enforcing packet filtering based on IP addresses, ports, and protocols.",
              scenario: "A remote attacker attempts to scan open ports on your workstation to connect to an unauthenticated, vulnerable service.",
              defense: "Enforce a default-deny posture: block all incoming and outgoing traffic except what is strictly authorized."
            }
          },
          w3: {
            clue: "Periodic copy of critical information that enables full recovery in the event of hardware failure, data loss, or cyberattacks.",
            reinforce: {
              title: "BACKUP (Data Redundancy)",
              def: "Scheduled duplication of databases and files to isolated storage media to guarantee business continuity during disasters.",
              scenario: "A ransomware outbreak encrypts organizational storage drives and demands an exorbitant cryptocurrency ransom.",
              defense: "Apply the 3-2-1 backup rule: 3 copies of data, across 2 different storage media types, with 1 copy stored offline (air-gapped)."
            }
          }
        }
      },
      2: {
        name: "Level 02",
        theme: "Social Engineering & Identity",
        difficulty: "Basic",
        words: {
          w1: {
            clue: "Deceptive technique impersonating trusted entities to manipulate victims into revealing confidential credentials.",
            reinforce: {
              title: "PHISHING (Identity Spoofing)",
              def: "Psychological attack exploiting urgency, fear, or reward, where attackers forge emails or messages to harvest banking or corporate credentials.",
              scenario: "An email mimicking your bank's exact visual style claiming 'your account will be suspended unless you confirm your password here'.",
              defense: "Inspect sender domains closely, avoid clicking panic-inducing links, and enforce multi-factor authentication (MFA/2FA)."
            }
          },
          w2: {
            clue: "Secret string of characters used to authenticate a user's digital identity to an access control system.",
            reinforce: {
              title: "PASSWORD (Secret Credential)",
              def: "Foundational knowledge-based authentication factor ('something you know'). Security depends on length, entropy, and strict secrecy.",
              scenario: "Reusing short, predictable passwords ('admin123') across multiple platforms. If one website suffers a breach, all accounts fall.",
              defense: "Adopt passphrases of at least 14 characters, utilize reputable password managers, and never reuse passwords."
            }
          },
          w3: {
            clue: "Individual with deep computer expertise who investigates system architectures, vulnerabilities, and technological limits.",
            reinforce: {
              title: "HACKER (Ethical vs Malicious)",
              def: "Technical specialist skilled at low-level computing. Ethical 'White Hat' hackers secure systems by identifying weaknesses before criminals exploit them.",
              scenario: "A security researcher discovers a critical SQL injection vulnerability in an enterprise portal and submits a responsible disclosure.",
              defense: "Schedule regular penetration testing (pentesting) and establish a clear vulnerability disclosure policy."
            }
          }
        }
      },
      3: {
        name: "Level 03",
        theme: "Cryptographic Threats & Disguise",
        difficulty: "Basic",
        words: {
          w1: {
            clue: "Malware variant that hijacks and encrypts victim files, demanding financial payment in exchange for the decryption key.",
            reinforce: {
              title: "RANSOMWARE (Data Extortion)",
              def: "Harmful software utilizing asymmetric encryption algorithms to lock enterprise documents and servers for extortion purposes.",
              scenario: "A malicious email attachment containing weaponized macros instantly encrypts a hospital's shared network volume.",
              defense: "Maintain immutable, offsite backups, restrict macro execution, and enforce strict network segmentation."
            }
          },
          w2: {
            clue: "Cryptographic process converting readable plaintext into unintelligible ciphertext using an algorithm and a cipher key.",
            reinforce: {
              title: "ENCRYPT / ENCRYPTION",
              def: "Mathematical application of cryptographic algorithms (AES, RSA) guaranteeing confidentiality of data at rest and in transit.",
              scenario: "Physical theft of an unencrypted corporate laptop allows thieves to extract proprietary data directly from storage.",
              defense: "Enable full-disk encryption (BitLocker / FileVault) and mandate HTTPS/TLS for all networked communications."
            }
          },
          w3: {
            clue: "Malicious program masquerading as legitimate, harmless software to deceive users and install hidden backdoors.",
            reinforce: {
              title: "TROJAN HORSE (Covert Malware)",
              def: "Malware concealing its harmful payload beneath the guise of useful software (e.g., a cracked game, codec, or PDF tool).",
              scenario: "Downloading a utility crack that secretly installs a Remote Access Trojan (RAT), granting the adversary complete control.",
              defense: "Download software strictly from verified, official sources, and verify cryptographic checksums before running installers."
            }
          }
        }
      },
      4: {
        name: "Level 04",
        theme: "Infection Vectors & Zombie Networks",
        difficulty: "Basic",
        words: {
          w1: {
            clue: "Software code, command sequence, or proof-of-concept crafted specifically to take advantage of a security vulnerability.",
            reinforce: {
              title: "EXPLOIT (Vulnerability Weaponization)",
              def: "Code targeting a software bug (such as a buffer overflow) to hijack program control flow or escalate administrative privileges.",
              scenario: "Transmitting crafted network packets to an unpatched web service to execute arbitrary administrative commands remotely.",
              defense: "Maintain aggressive patch management programs and enforce compiler-level mitigations like ASLR and DEP."
            }
          },
          w2: {
            clue: "Covert malware designed to stealthily gather personal information and browsing habits to transmit them to an adversary.",
            reinforce: {
              title: "SPYWARE (Surveillance Code)",
              def: "Stealth-focused malware capturing keystrokes (keyloggers), cached browser credentials, or screen recordings without user awareness.",
              scenario: "A rogue browser extension covertly monitors and logs credit card details typed on ecommerce checkouts.",
              defense: "Audit installed browser extensions periodically and revoke excessive permissions on mobile and desktop apps."
            }
          },
          w3: {
            clue: "Network of compromised zombie devices coordinated and controlled remotely by an attacker to launch coordinated cyberattacks.",
            reinforce: {
              title: "BOTNET (Zombie Device Network)",
              def: "Large cluster of compromised computers, servers, or IoT devices receiving synchronized instructions from a Command & Control (C2) server.",
              scenario: "Millions of smart webcams with default credentials are commandeered to flood a financial institution with junk traffic (DDoS).",
              defense: "Always change factory-default credentials on IoT devices and isolate them inside dedicated Virtual LANs (VLANs)."
            }
          }
        }
      },
      5: {
        name: "Level 05",
        theme: "Active Defense & Authentication",
        difficulty: "Basic",
        words: {
          w1: {
            clue: "Decoy or trap system intentionally configured to attract attackers, detect intrusions, and analyze threat behavior.",
            reinforce: {
              title: "HONEYPOT (Deception System)",
              def: "Isolated decoy resource with no legitimate business purpose. Any inbound interaction is immediately classified as hostile activity.",
              scenario: "A deceptive database server populated with fake financial records exposes attackers' reconnaissance methods.",
              defense: "Deploy honeypots across internal networks to spot unauthorized lateral movement before attackers reach production assets."
            }
          },
          w2: {
            clue: "Software code update released by vendors to remediate security vulnerabilities, bugs, and operational flaws.",
            reinforce: {
              title: "SECURITY PATCH",
              def: "Software update engineered to eliminate security flaws before adversaries can weaponize them in production environments.",
              scenario: "A zero-day exploit emerges publicly. Systems failing to apply the emergency patch within 48 hours are automatically breached.",
              defense: "Establish an automated vulnerability scanning and prioritized patch deployment process for mission-critical infrastructure."
            }
          },
          w3: {
            clue: "Hardware device or dynamic one-time passcode utilized as a second authentication factor (2FA) to confirm identities.",
            reinforce: {
              title: "AUTHENTICATION TOKEN",
              def: "Possession-based authentication factor ('something you have'). Generates time-based one-time passcodes (TOTP) to thwart credential theft.",
              scenario: "An adversary obtains your password through a data dump but cannot sign in without the real-time code from your security key.",
              defense: "Enforce multi-factor authentication (MFA/2FA) across all services using authenticator apps or hardware FIDO2 security keys."
            }
          }
        }
      }
    }
  }
};
