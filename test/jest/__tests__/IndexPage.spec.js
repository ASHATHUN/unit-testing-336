import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ทดสอบข้อมูลส่วนตัว', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('วิวดีมาก')
  });

//   it('ตรวจสอบตัวแปรที่ชื่อว่า title', () => {
//     const wrapper = shallowMount(IndexPage, {
//       data () {
//         return {
//           title: 'วิวดีมาก'
//         }
//       }
//     })
//     let header = wrapper.find('.htmlClass h1')
//     expect(header.text()).toBe('วิวดีมาก')
//   })

  it('ตรวจสอบตัวแปรที่ชื่อว่า ชื่อจริง (firstname)', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
            title: 'ธัญพิมล'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('ธัญพิมล')
  })

  it('ตรวจสอบตัวแปรที่ชื่อว่า นามสกุล (lastname)', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'วังใน'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('วังใน')
  })

  it('ตรวจสอบตัวแปรที่ชื่อว่า รหัสนักศึกษา (studentID)', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: '6604101336'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('6604101336')
  })

  it('ตรวจสอบตัวแปรที่ชื่อว่า ชื่อเล่น (nickname)', () => {
    const wrapper = shallowMount(IndexPage, {
      data () {
        return {
          title: 'มีน'
        }
      }
    })
    let header = wrapper.find('.htmlClass h1')
    expect(header.text()).toBe('มีน')
  })

})

// test('ทดสอบว่ามีฟอร์ม (form)', () => {
//     const wrapper = shallowMount(IndexPage)
//     expect(wrapper.find('form').exists()).toBe(true)
// })

// test('ทดสอบว่าในฟอร์ม (form) มีการรับค่า (input)', () => {
//     const wrapper = shallowMount(IndexPage)
//     expect(wrapper.find('form > input').exists()).toBe(true)
// })

// test('ทดสอบว่ามีปุ่ม (button)', () => {
//     const wrapper = shallowMount(IndexPage)
//     expect(wrapper.find('button').exists()).toBe(true)
// })