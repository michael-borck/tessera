# Tessera Educational Platform

<!-- BADGES:START -->
[![css](https://img.shields.io/badge/-css-1572b6?style=flat-square)](https://github.com/topics/css) [![cybersecurity](https://img.shields.io/badge/-cybersecurity-f44336?style=flat-square)](https://github.com/topics/cybersecurity) [![educational-platform](https://img.shields.io/badge/-educational--platform-blue?style=flat-square)](https://github.com/topics/educational-platform) [![javascript](https://img.shields.io/badge/-javascript-f7df1e?style=flat-square)](https://github.com/topics/javascript) [![lua](https://img.shields.io/badge/-lua-blue?style=flat-square)](https://github.com/topics/lua) [![quarto](https://img.shields.io/badge/-quarto-blue?style=flat-square)](https://github.com/topics/quarto) [![static-site-generator](https://img.shields.io/badge/-static--site--generator-blue?style=flat-square)](https://github.com/topics/static-site-generator) [![systems-analysis](https://img.shields.io/badge/-systems--analysis-blue?style=flat-square)](https://github.com/topics/systems-analysis) [![web-design](https://img.shields.io/badge/-web--design-blue?style=flat-square)](https://github.com/topics/web-design) [![demo](https://img.shields.io/badge/-demo-blue?style=flat-square)](https://github.com/topics/demo)
<!-- BADGES:END -->

Welcome to Tessera Educational Platform - a comprehensive cybersecurity and systems analysis learning environment designed for university students and professionals.

## 🏗️ Platform Architecture

### **Student Learning Site (GitHub Pages)**
- **URL:** https://tessera.locoensayo.org
- **Purpose:** Educational content, interactive chatbots, documentation
- **Technology:** Quarto static site generator
- **Features:** Interactive chatbots, educational scenarios, documentation

## 🎓 Educational Focus

Tessera simulates a fictional cloud services company experiencing a security incident, providing realistic learning scenarios for:

- **Information Security Audit and Control (ISYS6018)**
- **Systems Analysis and Design (ISYS2002)**
- **Knowledge Management and Intelligent Systems (ISYS6014)**
- **Information Systems Analysis and Design (ISAD5001)**

## 🔧 For Developers

### Prerequisites
- Git
- [Quarto CLI](https://quarto.org/docs/get-started/)

### Local Development
```bash
git clone https://github.com/michael-borck/cloudcore.git
cd cloudcore

# Run student site locally
quarto preview
```

## 🏫 For Students

1. **Visit the learning site:** https://tessera.locoensayo.org
2. **Explore scenarios:** Browse educational content and case studies
3. **Interact with staff:** Chat with AI-powered Tessera employees
4. **Review documents:** Access policies, logs, and incident reports

## 📁 Repository Structure

```
├── docs/                    # Educational content (policies, interviews, logs)
├── chatbots/               # AI character interfaces
│   ├── bots/              # Individual character interfaces (.qmd files)
│   └── _backstories/      # Character development and scenarios
│       ├── [character files]  # Used by chatbot provider
│       └── development/       # Archived development files
├── blog/                   # Technical articles and tutorials
├── assets/                 # Images and media files
├── scripts/                # Contact forms and UI JavaScript
└── data/                   # Sample financial and operational data
```

## 🤝 Contributing

This platform is actively used in university courses. Contributions should:
- Maintain educational integrity
- Follow existing content and design patterns
- Test thoroughly before submitting
- Consider impact on student learning experience

Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Curtin University students and staff for feedback and testing
- AnythingLLM for chatbot infrastructure
- Quarto team for the excellent static site generator

---

**For support:** Contact the site administrator
**Technical issues:** Check the [Issues](https://github.com/michael-borck/cloudcore/issues) page