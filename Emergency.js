  const bloodBanksData = {
      Lahore: [
        { name: "AL Khidmat Blood Band", contact: "042-37235982" },
        { name: "Fatmid Foundation", contact: "042-35863950" },
        { name: "Ganga Ram Hospital", contact: "042-6362152-59" },
        { name: "Hilal-e-Ahmar", contact: "042-36304702" },
        { name: "Lady Willington Hospital", contact: "042-37659001" },
        { name: "Mayo Hospital", contact: "042-99211104" },
        { name: "Minhaj-Ul-Quran Blood Bank", contact: "042-37230932" },
        { name: "Pakistan Blood Donation Society", contact: "042-37598807" },
        { name: "Red Cresent", contact: "042-36304702-03" },
        { name: "Services Hospital", contact: "042-37588351" },
        { name: "Shaukat Khanum Memorial", contact: "042-35180725-29" },
        { name: "Sundas Foundation", contact: "042-37565440" },
        { name: "Sundas Foundation", contact: "042-37539232-3" },
        { name: "Suryia Azeem Blood Bank", contact: "042-37120004-05" },
        { name: "Venus Blood Bank", contact: "042-37223466" }
      ],
      Karachi: [
        { name: "Hussaini Blood Bank", contact: "021-32258070" },
        { name: "Fatmid Foundation", contact: "021-32782567" }
      ],
      Islamabad: [
        { name: "PIMS Blood Bank", contact: "051-9261170" },
        { name: "Shifa International", contact: "051-8464646" }
      ],
      Faisalabad: [
        { name: "Allied Hospital Blood Bank", contact: "041-9210082" }
      ],
      Multan: [
        { name: "Nishtar Hospital Blood Bank", contact: "061-9200231" }
      ],
      Peshawar: [
        { name: "Lady Reading Hospital", contact: "091-9211430" }
      ],
      Quetta: [
        { name: "Civil Hospital Blood Bank", contact: "081-9213070" }
      ]
    };

    function updateBloodBanksTable(city) {
      const table = document.querySelector('.tblList tbody');
      if (!table) return;
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }
      const data = bloodBanksData[city] || [];
      data.forEach((bank, idx) => {
        const row = table.insertRow();
        row.className = 'mouseover';
        row.innerHTML = `<td>${idx + 1}</td><td>${bank.name}&nbsp;</td><td>${bank.contact}&nbsp;</td>`;
      });
    }

    document.addEventListener('DOMContentLoaded', function() {
      const citySelect = document.getElementById('cityhelp');
      const typeRadios = document.querySelectorAll('input[name="radio"]');
      const form = document.querySelector('.formfill');

      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          const city = citySelect.value;
          const type = document.querySelector('input[name="radio"]:checked').value;
          if (type === "Blood banks") {
            updateBloodBanksTable(city);
          } else {

            const table = document.querySelector('.tblList tbody');
            while (table.rows.length > 1) {
              table.deleteRow(1);
            }
            const row = table.insertRow();
            row.innerHTML = `<td colspan="3">No data available for ${type} in ${city}.</td>`;
          }
        });
      }
    });