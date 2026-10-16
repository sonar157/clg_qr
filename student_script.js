const semesterSelect = document.getElementById("sem");
const branchSelect = document.getElementById("branch");
const subjectSections = {
    it: {
        i: "i_it_subject-section",
        ii: "ii_it_subject-section",
        iii: "iii_it_subject-section",
        iv: "iv_it_subject-section",
        v: "v_it_subject-section",
        vi: "vi_it_subject-section",
        vii: "vii_it_subject-section"
    },
    cse: {
        i: "i_cs_subject-section",
        ii: "ii_cs_subject-section",
        iii: "iii_cs_subject-section",
        iv: "iv_cs_subject-section",
        v: "v_cs_subject-section"
    },
    mech: {
        i: "i_me_subject-section",
        ii: "ii_me_subject-section",
        iii: "iii_me_subject-section",
        iv: "iv_me_subject-section",
        v: "v_me_subject-section",
        vi: "vi_me_subject-section",
        vii: "vii_me_subject-section"
    },
    civil: {
        i: "i_ce_subject-section",
        ii: "ii_ce_subject-section",
        iii: "iii_ce_subject-section",
        iv: "iv_ce_subject-section",
        v: "v_ce_subject-section",
        vi: "vi_ce_subject-section",
        vii: "vii_ce_subject-section"
    },
    mba: {
        i: "i_cb_subject-section",
        ii: "ii_cb_subject-section",
        iii: "iii_cb_subject-section",
        iv: "iv_cb_subject-section",
        v: "v_cb_subject-section"
    },
    aiml: {
        i: "i_cm_subject-section",
        ii: "ii_cm_subject-section",
        iii: "iii_cm_subject-section",
        iv: "iv_cm_subject-section"
    },
    ds: {
        i: "i_ds_subject-section",
        ii: "ii_ds_subject-section",
        iii: "iii_ds_subject-section",
        iv: "iv_ds_subject-section"
    },
    ece: {
        i: "ec_i_subject-section",
        ii: "ec_ii_subject-section",
        iii: "ec_iii_subject-section",
        iv: "ec_iv_subject-section"
    },
    eee: {
        i: "eee_i_subject-section",
        ii: "eee_ii_subject-section",
        iii: "eee_iii_subject-section",
        iv: "eee_iv_subject-section",
        v: "eee_v_subject-section"
    }
};
const allSubjectSections = document.querySelectorAll('[id$="_subject-section"]');

function updateSubjectVisibility() {
    allSubjectSections.forEach((section) => {
        section.hidden = true;
    });

    const sectionId = subjectSections[branchSelect.value]?.[semesterSelect.value];
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.hidden = false;
    }
}

semesterSelect.addEventListener("change", updateSubjectVisibility);
branchSelect.addEventListener("change", updateSubjectVisibility);
updateSubjectVisibility();