/** 이름 태그 **/
const inputUserName = getElement('user_name');
/** 이름 태그 **/

/** 이메일 태그 **/
const inputUserEmail = getElement('user_email');
/** 이메일 태그 **/

/** 비밀번호 태그 **/
const inputUserPassword = getElement('user_password');
const inputUserCheckPassword = getElement('user_check_password');
/** 비밀번호 태그 **/

/** 생년월일 태그 **/
const selectUserBirthYear = getElement('user_birth_year');
const selectUserBirthMonth = getElement('user_birth_month');
const selectUserBirthDay = getElement('user_birth_day');
/** 생년월일 태그 **/

/** 연락처 태그 **/
const selectUserPhoneNumberPre = getElement('user_phone_number_pre');
const inputUserPhoneNumberIn = getElement('user_phone_number_in');
const inputUserPhoneNumberPost = getElement('user_phone_number_post');

/** 연락처 태그 **/

function getElement(id) {
    return $(`#${id}`);
}

function debounce(func, wait) {
    let inDebounce;
    return function () {
        const context = this;
        const args = arguments;

        // setTimeout이 실행된 Timeout의 ID를 반환하고, clearTimeout()으로 이를 해제할 수 있음을 이용
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func.apply(context, arguments), wait);
    };
}

function createBirthYear() {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 90; i <= currentYear; i++) {
        selectUserBirthYear.append(`<option value='${i}'>${i}년</option>`);
    }

    for (let i = 1; i < 13; i++) {
        selectUserBirthMonth.append(`<option value='${i < 10 ? '0' + i : i}'>${i}월</option>`);
    }

    for (let i = 1; i < 32; i++) {
        selectUserBirthDay.append(`<option value='${i < 10 ? '0' + i : i}'>${i}일</option>`);
    }
}

const user = {
    name() {
        return inputUserName.val();
    },
    birth() {
        return `${selectUserBirthYear.val()}-${selectUserBirthMonth.val()}-${selectUserBirthDay.val()}`
    },
    phoneNumber() {
        return `${selectUserPhoneNumberPre.val()}${inputUserPhoneNumberIn.val()}${inputUserPhoneNumberPost.val()}`
    },
    password() {
        return inputUserPassword.val()
    },
    email() {
        return inputUserEmail.val();
    },
    gender() {
        return $('input[name="gender"]:checked').val();
    },
    info() {
        return {
            name: this.name(),
            birth: this.birth(),
            phoneNumber: this.phoneNumber(),
            password: this.password(),
            email: this.email(),
            gender: this.gender()
        }
    }
}


function isError(message) {
    // message의 타입이 string이면 에러메시지
    return typeof message === 'string';
}

function setError(id, message) {
    const el = document.getElementById(id);
    if (isError(message)) {
        el.innerText = message;
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
}

async function onInputInvalid(type) {
    let message = false;
    let errorId = '';

    switch (type) {
        case 'name' :
            message = invalid.name();
            errorId = 'error_name';
            break;
        case 'email' :
            message = await invalid.email();
            errorId = 'error_email';
            break;
        case 'password' :
            message = invalid.password();
            errorId = 'error_password';
            break;
        case 'passwordCheck' :
            message = invalid.passwordCheck();
            errorId = 'error_password';
            break;
    }

    setError(errorId, message);
}

/** 유효성 체크 함수 **/
const invalid = {
    name() {
        /** 영/한 이외의 값이 있는지 체크(공백/특수문자/숫자 등등) **/
        const name = user.name();
        if (name.length === 0) {
            return '이름을 입력해주세요.';
        }

        if (name.length > 6) {
            return '이름은 6자리 이하여야 합니다.';
        }

        if (/[^a-zA-Z가-힣ㄱ-ㅎ]/g.test(name)) {
            return '이름에 영문/한글 이외의 값은 입력 할 수 없습니다.';
        }

        return true;
    },
    async email() {
        const emailFormat = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/.test(user.email())
        if (!emailFormat) {
            return '이메일 형식이 잘못됐습니다.';
        }


        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/user/EmailCheck', //Controller에서 인식할 주소 EmailCheck는 가명
                type: 'post',
                data: {
                    email: user.email()
                },
                success: function (cnt) {
                    resolve(cnt === 1 ? '중복된 이메일 입니다.' : true);
                },
                error: function () {
                    /** 서버 연동후 지후고 아래 주석 처리 되어 있는 코드 풀기 **/
                    if(user.email() === 'kyungeun9718@daum.net') {
                        resolve('중복된 이메일 입니다.');
                    } else {
                        resolve(true);
                    }
                    // resolve('알수 없는 에러 입니다.');
                }
            });
        })
    },
    password() {
        const password = user.password();
        if (password.length < 7 || password.length > 15) {
            return '비밀번호는 7~15까지 가능 합니다.'
        }

        return true;
    },

    passwordCheck() {
        const password = user.password();
        if (password !== inputUserCheckPassword.val()) {
            return '입력된 비밀번호가 다릅니다.'
        }

        return true;
    },

    birth() {
        return /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(user.birth());
    },
    phoneNumber() {
        return /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(user.phoneNumber());
    },
    gender() {
        return !!user.gender();
    },
    all() {
        return this.name() && this.birth() && this.phoneNumber() && this.password() && this.email() && this.gender();
    }
}

/** 서브밋 함수 **/
function submit() {
    if (invalid.all()) {
        // TODO: 모든 값들에 대해 유효성 통과
        user.info();
        return;
    } else {
        setError()
    }
}

$(document).ready(() => {
    createBirthYear();
    onInputInvalid = debounce(onInputInvalid, 500);
})
