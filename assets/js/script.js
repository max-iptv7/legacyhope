// OBFUSCATED & PROTECTED
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ once: !0, offset: 100, duration: 800, easing: 'ease-out-cubic' });

    // Preloader Logic
    const _0x1a = document.querySelector('.preloader');
    const percentageElement = document.querySelector('.loading-percentage');
    let percentage = 0;
    const interval = setInterval(() => {
        if (percentage < 100) {
            percentage++;
            if (percentageElement) percentageElement.textContent = percentage + '%';
        } else {
            clearInterval(interval);
        }
    }, 20); // 20ms * 100 = 2000ms (matches 2s animation)

    setTimeout(() => { _0x1a.classList.add('hidden'); _0x2b() }, 2500); const _0x3c = document.getElementById('player-count'), _0x4d = document.querySelector('.status-dot'); async function _0x5e() { try { let _0x6f; try { const _0x7g = new AbortController(), _0x8h = setTimeout(() => _0x7g.abort(), 2000); _0x6f = await fetch('https://rp.legacy-hope.de/players.json', { signal: _0x7g.signal }); clearTimeout(_0x8h) } catch (_0x9i) { _0x6f = await fetch('https://corsproxy.io/?' + encodeURIComponent('https://rp.legacy-hope.de/players.json')) } if (!_0x6f.ok) throw new Error('Offline'); const _0x0j = await _0x6f.json(), _0x1k = _0x0j.length; _0x3c.textContent = `Online: ${_0x1k} Players`; _0x4d.style.background = '#00ff00'; _0x4d.style.boxShadow = '0 0 10px #00ff00' } catch (_0x2l) { _0x3c.textContent = 'Server Offline'; _0x4d.style.background = '#ff0000'; _0x4d.style.boxShadow = '0 0 10px #ff0000' } }
    _0x5e(); setInterval(_0x5e, 30000); const _0x3a = document.querySelector('.hamburger'), _0x4b = document.querySelector('.nav-links'); if (_0x3a) { _0x3a.addEventListener('click', () => { _0x3a.classList.toggle('active'); _0x4b.classList.toggle('active') }) } const _0x5c = document.querySelectorAll('.rule-header'); _0x5c.forEach(_0x6d => { _0x6d.addEventListener('click', () => { const _0x7e = _0x6d.parentElement, _0x8f = _0x7e.querySelector('.rule-body'); document.querySelectorAll('.rule-item').forEach(_0x9g => { if (_0x9g !== _0x7e && _0x9g.classList.contains('active')) { _0x9g.classList.remove('active'); _0x9g.querySelector('.rule-body').style.maxHeight = null } }); _0x7e.classList.toggle('active'); if (_0x7e.classList.contains('active')) { _0x8f.style.maxHeight = _0x8f.scrollHeight + "px" } else { _0x8f.style.maxHeight = null } }) }); const _0x9a = document.querySelector('.navbar'); window.addEventListener('scroll', () => { if (window.scrollY > 50) { _0x9a.style.background = 'rgba(0, 0, 0, 0.9)' } else { _0x9a.style.background = 'rgba(0, 0, 0, 0.7)' } });
    function _0x2b() { const _0x3b = document.getElementById('snow-container'); for (let _0x4c = 0; _0x4c < 50; _0x4c++) { const _0x5d = document.createElement('div'); _0x5d.classList.add('snowflake'); _0x5d.style.left = `${Math.random() * 100}vw`; const _0x6e = Math.random() * 3 + 2; _0x5d.style.width = `${_0x6e}px`; _0x5d.style.height = `${_0x6e}px`; _0x5d.style.animationDuration = `${Math.random() * 5 + 5}s`; _0x5d.style.animationDelay = `${Math.random() * 5}s`; _0x3b.appendChild(_0x5d); _0x5d.style.animationIterationCount = 'infinite' } }
    const _0x7f = document.getElementById('whitelistForm');

    // Conditional Field Logic
    const playedRpSelect = document.getElementById('playedRp');
    const previousServerGroup = document.getElementById('previousServerGroup');
    const previousServerInput = document.getElementById('previousServer');

    if (playedRpSelect && previousServerGroup) {
        playedRpSelect.addEventListener('change', () => {
            if (playedRpSelect.value === 'Yes') {
                previousServerGroup.classList.remove('hidden-field');
                previousServerInput.setAttribute('required', 'true');
            } else {
                previousServerGroup.classList.add('hidden-field');
                previousServerInput.removeAttribute('required');
                previousServerInput.value = ''; // Clear value if hidden
            }
        });
    }

    if (_0x7f) {
        _0x7f.addEventListener('submit', async (_0x8g) => {
            _0x8g.preventDefault();
            const _0x9h = _0x7f.querySelector('button[type="submit"]'), _0x0i = _0x9h.innerHTML;

            const _0x1j = {
                fullName: document.getElementById('fullName').value,
                age: document.getElementById('age').value,
                discordId: document.getElementById('discordId').value,
                playedRp: document.getElementById('playedRp').value,
                previousServer: document.getElementById('previousServer').value,
                importantRules: document.getElementById('importantRules').value,
                skipScene: document.getElementById('skipScene').value
            };

            const _0x2k = 'https://discord.com/api/webhooks/1401937015230169149/WEJCUtxhytdk1N49106OA3YOIv3Y6rlAkRaT8N0Aw2s31turq_jb8BqbeXFeneU-fqHx';

            // Build Fields Array
            let fields = [
                { name: "👤 Full Name", value: `\`${_0x1j.fullName}\``, inline: !0 },
                { name: "🎂 Age", value: `\`${_0x1j.age}\``, inline: !0 },
                { name: "🆔 Discord ID", value: `\`${_0x1j.discordId}\``, inline: !0 },
                { name: "🎮 Played RP Before?", value: `**${_0x1j.playedRp}**`, inline: !0 }
            ];

            // Add Previous Server if exists
            if (_0x1j.playedRp === 'Yes' && _0x1j.previousServer) {
                fields.push({ name: "🌍 Previous Server", value: `\`${_0x1j.previousServer}\``, inline: !0 });
            }

            fields.push(
                { name: "📜 Important RP Rules", value: `>>> ${_0x1j.importantRules}`, inline: !1 },
                { name: "🎬 Skip Scene & Example", value: `>>> ${_0x1j.skipScene}`, inline: !1 }
            );

            const _0x3l = {
                embeds: [{
                    title: "📝 New Whitelist Application",
                    color: 13938487,
                    footer: { text: "Legacy Hope RP Application System", icon_url: "https://r2.fivemanage.com/xtTJr37GPiQTBRLqvFUCm/lh.png" },
                    timestamp: new Date().toISOString(),
                    fields: fields
                }]
            };

            try {
                _0x9h.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
                _0x9h.disabled = !0;
                const _0x4m = await fetch(_0x2k, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(_0x3l)
                });
                if (_0x4m.ok) {
                    _0x9h.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
                    _0x9h.style.background = '#00ff00';
                    _0x9h.style.color = '#000';
                    _0x7f.reset();
                    // Reset conditional field
                    previousServerGroup.classList.add('hidden-field');

                    setTimeout(() => {
                        _0x9h.innerHTML = _0x0i;
                        _0x9h.style.background = '';
                        _0x9h.style.color = '';
                        _0x9h.disabled = !1
                    }, 3000)
                } else throw new Error('Error')
            } catch (_0x5n) {
                console.error('Fail:', _0x5n);
                _0x9h.innerHTML = 'Error';
                _0x9h.style.background = '#ff0000';
                setTimeout(() => {
                    _0x9h.innerHTML = _0x0i;
                    _0x9h.style.background = '';
                    _0x9h.disabled = !1
                }, 3000)
            }
        })
    }

    // Police Application Form Handler
    const _0x8p = document.getElementById('policeForm');
    if (_0x8p) {
        _0x8p.addEventListener('submit', async (_0x9q) => {
            _0x9q.preventDefault();
            const _0xar = _0x8p.querySelector('button[type="submit"]'), _0xbs = _0xar.innerHTML;

            const _0xct = {
                policeName: document.getElementById('policeName').value,
                policeAge: document.getElementById('policeAge').value,
                policeDiscordId: document.getElementById('policeDiscordId').value,
                whyJoin: document.getElementById('whyJoin').value,
                experience: document.getElementById('experience').value,
                availability: document.getElementById('availability').value,
                scenario: document.getElementById('scenario').value
            };

            const _0xdu = 'https://discord.com/api/webhooks/1451553388625133599/ObzaAgV73Ked5QK4ODM5mTm3SkPV9Kj6M4Y7e7f_Mboo9ceCOrVQXL1rloeTveD7StB3';

            const _0xev = {
                embeds: [{
                    title: "👮 New Police Application",
                    color: 3447003,
                    footer: { text: "Legacy Hope RP Police System", icon_url: "https://r2.fivemanage.com/xtTJr37GPiQTBRLqvFUCm/lh.png" },
                    timestamp: new Date().toISOString(),
                    fields: [
                        { name: "👤 Name", value: `\`${_0xct.policeName}\``, inline: true },
                        { name: "🎂 Age", value: `\`${_0xct.policeAge}\``, inline: true },
                        { name: "🆔 Discord ID", value: `\`${_0xct.policeDiscordId}\``, inline: true },
                        { name: "💭 Why Join Legacy Police?", value: `>>> ${_0xct.whyJoin}`, inline: false },
                        { name: "🎖️ Previous Experience", value: `>>> ${_0xct.experience}`, inline: false },
                        { name: "📅 Availability", value: `>>> ${_0xct.availability}`, inline: false },
                        { name: "🚨 Scenario Response", value: `>>> ${_0xct.scenario}`, inline: false }
                    ]
                }]
            };

            try {
                _0xar.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
                _0xar.disabled = true;
                const _0xfw = await fetch(_0xdu, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(_0xev)
                });
                if (_0xfw.ok) {
                    _0xar.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
                    _0xar.style.background = '#00ff00';
                    _0xar.style.color = '#000';
                    _0x8p.reset();
                    setTimeout(() => {
                        _0xar.innerHTML = _0xbs;
                        _0xar.style.background = '';
                        _0xar.style.color = '';
                        _0xar.disabled = false
                    }, 3000)
                } else throw new Error('Error')
            } catch (_0xgx) {
                console.error('Fail:', _0xgx);
                _0xar.innerHTML = 'Error';
                _0xar.style.background = '#ff0000';
                setTimeout(() => {
                    _0xar.innerHTML = _0xbs;
                    _0xar.style.background = '';
                    _0xar.disabled = false
                }, 3000)
            }
        })
    }
});
// SECURITY
const _0x9z = (e) => { if (e.key === 'F12' || e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key) || [73, 74, 67].includes(e.keyCode))) || (e.ctrlKey && (['U', 'u'].includes(e.key) || e.keyCode === 85))) { e.preventDefault(); e.stopPropagation(); return !1 } }; document.addEventListener('contextmenu', e => e.preventDefault()); document.addEventListener('keydown', _0x9z, !0); window.addEventListener('keydown', _0x9z, !0); setInterval(() => { debugger }, 100); document.onselectstart = e => e.preventDefault(); document.ondragstart = e => e.preventDefault();


// Volume Control
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('hero-video');
    const volumeBtn = document.getElementById('volume-toggle');

    if (video && volumeBtn) {
        const volumeIcon = volumeBtn.querySelector('i');
        volumeBtn.addEventListener('click', () => {
            if (video.muted) {
                video.muted = false;
                volumeIcon.classList.remove('fa-volume-xmark');
                volumeIcon.classList.add('fa-volume-high');
            } else {
                video.muted = true;
                volumeIcon.classList.remove('fa-volume-high');
                volumeIcon.classList.add('fa-volume-xmark');
            }
        });
    }
});

// Statistics Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    const _0xhy = document.querySelectorAll('.stat-number');
    let _0xiz = false;

    const _0xja = (_0xkb) => {
        const _0xlc = +_0xkb.getAttribute('data-target');
        const _0xmd = +_0xkb.innerText;
        const _0xne = _0xlc / 100;

        if (_0xmd < _0xlc) {
            _0xkb.innerText = Math.ceil(_0xmd + _0xne);
            setTimeout(() => _0xja(_0xkb), 20);
        } else {
            _0xkb.innerText = _0xlc;
        }
    };

    const _0xof = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !_0xiz) {
                _0xiz = true;
                _0xhy.forEach(_0xpg => _0xja(_0xpg));
            }
        });
    }, { threshold: 0.5 });

    const _0xqh = document.querySelector('.stats-section');
    if (_0xqh) _0xof.observe(_0xqh);
});

// Scroll to Top Button
document.addEventListener('DOMContentLoaded', () => {
    const _0xri = document.getElementById('scrollToTop');

    if (_0xri) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                _0xri.classList.add('visible');
            } else {
                _0xri.classList.remove('visible');
            }
        });

        _0xri.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Active Navigation on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const _0xsj = document.querySelectorAll('.nav-links a');
    const _0xtk = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let _0xul = '';

        _0xtk.forEach(_0xvm => {
            const _0xwn = _0xvm.offsetTop;
            const _0xxo = _0xvm.clientHeight;

            if (window.pageYOffset >= _0xwn - 200) {
                _0xul = _0xvm.getAttribute('id');
            }
        });

        _0xsj.forEach(_0xyp => {
            _0xyp.classList.remove('active');
            if (_0xyp.getAttribute('href') === `#${_0xul}`) {
                _0xyp.classList.add('active');
            }
        });
    });
});

