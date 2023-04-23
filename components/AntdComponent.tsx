import {
  Button,
  DatePicker,
  DatePickerProps,
  Form,
  InputNumber,
  Select,
  Slider,
  Switch,
} from 'antd'
const FormItem = Form.Item
const content = {
  marginTop: '100px',
}
const AntdComponent = () => {
  const onDatePickerChange: DatePickerProps['onChange'] = (
    date,
    dateString
  ) => {
    console.log(date, dateString)
  }
  return (
    <div>
      <Form
        layout="horizontal"
        size={'large'}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <FormItem label="Input Number">
          <InputNumber
            min={1}
            max={10}
            style={{ width: 100 }}
            defaultValue={3}
            name="inputNumber"
          />
        </FormItem>

        <FormItem label="Switch">
          <Switch defaultChecked />
        </FormItem>

        <FormItem label="Slider">
          <Slider defaultValue={70} />
        </FormItem>

        <FormItem label="Select">
          <Select
            defaultValue="lucy"
            style={{ width: 192 }}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'disabled',
                disabled: true,
                label: 'Disabled',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
            ]}
          />
        </FormItem>

        <FormItem label="DatePicker">
          <DatePicker showTime onChange={onDatePickerChange} />
        </FormItem>
        <FormItem style={{ marginTop: 48 }} wrapperCol={{ offset: 8 }}>
          <Button type="primary" htmlType="submit">
            OK
          </Button>
          <Button style={{ marginLeft: 8 }}>Cancel</Button>
        </FormItem>
      </Form>
    </div>
  )
}
export default AntdComponent
