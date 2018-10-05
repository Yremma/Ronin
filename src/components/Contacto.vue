<template>
    <div id="contacto">

        <div class="divDivisor">
            Contactanos
        </div>

        <el-form ref="form" :model="form" :rules="rules">
            <el-row>
                <el-col :xs="24" :sm="12" style="padding:30px 30px 0px 30px">
                    <el-form-item prop="Nombre">
                        <el-input size="mini" v-model="form.Nombre" required @keypress.native="control($event, 't')">
                            <template slot="prepend">Nombre/s <span style="color:#f00">*</span></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="Apellido">
                        <el-input size="mini" v-model="form.Apellido" required @keypress.native="control($event, 't')">
                            <template slot="prepend">Apellido/s <span style="color:#f00">*</span></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="Mail">                            
                        <el-input size="mini" v-model="form.Mail" required>
                            <template slot="prepend">E-mail <span style="color:#f00">*</span></template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input size="mini" v-model="form.Telefono" maxlength="15" @keypress.native="control($event, 'n')">
                            <template slot="prepend">Teléfono</template>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" style="padding:30px 30px 90px 30px">
                    <label style="font-size:20px; font-weight:bold; font-variant:small-caps">
                        Consulta <span style="color:#f00">*</span>
                    </label><br><br>
                    <el-form-item prop="Mensaje">
                        <el-input size="mini" type="textarea" v-model="form.Mensaje" rows="6" required></el-input>
                    </el-form-item>
                    <el-button type="danger" size="mini" class="el-col el-col-24" @click="Enviar()">Enviar</el-button>
                </el-col>
            </el-row>
        </el-form>   
    </div>
</template>



<script>
    import axios    from 'axios';
    
    
    export default 
    {   name: 'Contacto',
    
        data()
        {   return { 
                form:           {
                    Nombre              : '',
                    Apellido            : '',
                    Mail                : '',
                    Telefono            : '',
                    Mensaje             : ''
                },
                rules: {
                    Nombre: [
                        { required: true, message: 'Por favor, ingresa tu Nombre', trigger: 'blur' }
                    ],
                    Apellido: [
                        { required: true, message: 'Por favor, ingresa tu Apellido', trigger: 'blur' }
                    ],
                    Mail: [
                        { required: true, message: 'Por favor, ingresa tu e-mail para poder responderte', trigger: 'blur' },
                    ],
                    Mensaje: [
                        { required: true, message: 'Por favor, ingresa un Mensaje o Consulta', trigger: 'blur' },
                    ]
                }           
            }
        }, 


        methods:{
            control(e, tipo)
            {   if(tipo=='t')
                {   if( (e.which>32  && e.which<65)  || 
                        (e.which>90  && e.which<97)  || 
                        (e.which>123 && e.which<209) || 
                        (e.which>209 && e.which<241) ||
                        (e.which>241)
                    ) 
                    { e.preventDefault(); }                                                 // Campo alfabetico
                }
                else
                {   if( (e.which>31 & e.which<48) || e.which>57) { e.preventDefault(); }    // Campo numerico
                }
            },

            Limpiar()
            {   this.form.Nombre                    = '';
                this.form.Apellido                  = '';
                this.form.Mail                      = '';
                this.form.Telefono                  = '';
                this.form.Mensaje                   = '';
                document.getElementById('contacto').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            },
            
            Enviar()
            {   this.$refs['form'].validate((valid) => {
                    if(valid)
                    {   axios.get('http://gruporonin.com.ar/api/soporte_insert.php', {
                            params: {
                               Datos:               JSON.stringify(this.form)
                            } })
                            .then(response => {
                                this.Limpiar();
                                this.$alert('Tu mensaje se ha enviado con éxito. En breve estaremos respondiéndote. ¡Muchas Gracias!', 'Mensaje Enviado', {
                                    confirmButtonText: 'Cerrar',
                                    type: 'success',
                                    center: true
                                })
                            })
                            .catch(e => {
                                this.$alert('Ha ocurrido un error. Por favor, intenta nuevamente.', '¡Error!', {
                                    confirmButtonText: 'Cerrar',
                                    type: 'warning',
                                    center: true
                                })
                            })
                    }
                });  
            },
        }
    }
</script>



<style>
    #contacto
    {   background-image: url('../assets/Pizarron.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }

    .el-message-box__message
    {   color: #000;
    }
</style>