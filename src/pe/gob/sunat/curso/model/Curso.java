package pe.gob.sunat.curso.model;

import javax.xml.bind.annotation.XmlElement;

import javafx.beans.property.IntegerProperty;
import javafx.beans.property.SimpleIntegerProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

/**
 * 
 * @author John
 *
 */

public class Curso {
	
	StringProperty codCurso;
	
	StringProperty nomCurso;
	
	IntegerProperty credCurso;
	
	IntegerProperty hrsTeoria;
	
	IntegerProperty hrsPract;
	
	IntegerProperty hrsLab;
	
	IntegerProperty ciclo;
	
	IntegerProperty tipoCurso;
	
    public Curso() {
		// TODO Auto-generated constructor stub
    	this(null,null);
	}
	
	public Curso(String codCurso, String nomCurso) {
		super();
		this.codCurso = new SimpleStringProperty(codCurso);
		this.nomCurso = new SimpleStringProperty(nomCurso);
		
		this.credCurso = new SimpleIntegerProperty(0);
		this.hrsTeoria = new SimpleIntegerProperty(0);
		this.hrsPract = new SimpleIntegerProperty(0);
		this.hrsLab = new SimpleIntegerProperty(0);
		this.ciclo = new SimpleIntegerProperty(0);
		this.tipoCurso = new SimpleIntegerProperty(0);
	}
	
	public StringProperty codCursoProperty() {
		return codCurso ;
	}
	
	@XmlElement(name="COD_CURSO")
	public String getCodCurso() {
		return codCurso.get();
	}
	
	public void setCodCurso(String codCurso) {
		this.codCurso.set(codCurso);
	}
	
	
	public StringProperty nomCursoProperty() {
		return nomCurso ;
	}
	
	@XmlElement(name="NOM_CURSO")
	public String getNomCurso() {
		return nomCurso.get();
	}
	
	public void setNomCurso(String nomCurso) {
		this.nomCurso.set(nomCurso);
	}
	

	public IntegerProperty credCursoProperty() {
		return credCurso;
	}
	
	@XmlElement(name="CRED_CURSO")
	public Integer getCredCurso() {
		return credCurso.get();
	}
	
	public void setCredCurso(Integer credCurso) {
		this.credCurso.set(credCurso);
	}
	

	public IntegerProperty hrsTeoriaProperty() {
		return hrsTeoria;
	}
	
	@XmlElement(name="HRS_TEORIA")
	public Integer getHrsTeoria() {
		return hrsTeoria.get();
	}
	
	public void setHrsTeoria(Integer hrsTeoria) {
		this.hrsTeoria.set(hrsTeoria);
	}
	

	public IntegerProperty hrsPractProperty() {
		return hrsPract;
	}
	
	@XmlElement(name="HRS_PRACT")
	public Integer getHrsPract() {
		return hrsPract.get();
	}
	
	public void setHrsPract(Integer hrsPract) {
		this.hrsPract.set(hrsPract);
	}
	

	public IntegerProperty hrsLabProperty() {
		return hrsLab;
	}
	
	@XmlElement(name="HRS_LAB")
	public Integer getHrsLab() {
		return hrsLab.get();
	}
	
	public void setHrsLab(Integer hrsLab) {
		this.hrsLab.set(hrsLab);
	}
	

	public IntegerProperty cicloProperty() {
		return ciclo;
	}
	
	@XmlElement(name="CICLO")
	public Integer getCiclo() {
		return ciclo.get();
	}
	
	public void setCiclo(Integer ciclo) {
		this.ciclo.set(ciclo);
	}

	
	public IntegerProperty tipoCursoProperty() {
		return tipoCurso;
	}
	
	@XmlElement(name="TIPO_CURSO")
	public Integer getTipoCurso() {
		return tipoCurso.get();
	}
	
	public void setTipoCurso(Integer tipoCurso) {
		this.tipoCurso.set(tipoCurso);
	}
	
}
